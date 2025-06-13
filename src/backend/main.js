// import { app, BrowserWindow, ipcMain } from 'electron';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import * as activeWin from 'active-win';  // Corrected import statement

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
     
//       preload: path.join(__dirname, 'preload.js'),
   
//     },
//   });

//   // Use relative path for production
//   const indexPath =
//     process.env.NODE_ENV === 'development'
//       ? 'http://localhost:3001' 
//       : path.join(__dirname, '../../dist', 'index.html');

//   if (process.env.NODE_ENV === 'development') {
//     mainWindow.loadURL(indexPath);
//     mainWindow.webContents.openDevTools();
//   } else {
//     mainWindow.loadFile(path.join(__dirname, '../../dist', 'index.html'));
//   }

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// function trackActiveWindow() {
//   setInterval(async () => {
//     try {
//       const currentWindow = await activeWin(); // Corrected to use activeWin() directly
//       if (mainWindow) {
//         mainWindow.webContents.send('active-window', currentWindow);
//       }
//     } catch (error) {
//       console.error('Error tracking active window:', error);
//     }
//   }, 1000);
// }

// app.on('ready', () => {
//   createWindow();
//   trackActiveWindow();
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';


import activeWin from 'active-win';
const db = require('./db/db.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Use relative path for production
  const indexPath =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : path.join(__dirname, '../../dist', 'index.html');

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(indexPath);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../dist', 'index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


// Helper to categorize window
const CATEGORY_MAP = {
  focus: ['code', 'editor', 'word', 'excel', 'notepad', 'chrome', 'firefox', 'edge'],
  meeting: ['zoom', 'teams', 'meet', 'skype', 'webex'],
  break: ['spotify', 'vlc', 'music', 'video', 'game'],
  distraction: ['twitter', 'facebook', 'instagram', 'youtube', 'tiktok', 'reddit'],
};
function getCategory(window) {
  if (!window || !window.owner || !window.owner.name) return 'other';
  const name = window.owner.name.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_MAP)) {
    if (keywords.some((kw) => name.includes(kw))) return cat;
  }
  return 'other';
}

app.on('ready', () => {
  createWindow();
  setInterval(async () => {
    try {
      const currentWindow = await activeWin();
      if (mainWindow) {
        mainWindow.webContents.send('active-window', currentWindow);
      }
      // Persist to SQLite
      if (currentWindow && currentWindow.owner && currentWindow.owner.name) {
        const category = getCategory(currentWindow);
        db.run(
          'INSERT INTO activity_logs (timestamp, app_name, window_title, category) VALUES (?, ?, ?, ?)',
          [
            Date.now(),
            currentWindow.owner.name,
            currentWindow.title || '',
            category,
          ]
        );
      }
    } catch (error) {
      console.error('Error tracking active window:', error);
    }
  }, 1000);
});

// IPC: Fetch activity logs (for timeline/history)
import { ipcMain } from 'electron';
ipcMain.handle('fetch-activity-logs', async (event, { since }) => {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM activity_logs WHERE timestamp >= ? ORDER BY timestamp ASC',
      [since],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
