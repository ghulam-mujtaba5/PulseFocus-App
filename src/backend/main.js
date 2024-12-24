
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import * as activeWin from 'active-win';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Use relative path for production
  const indexPath = 
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'  // URL for development environment
      :path.join(__dirname, '..', '..', 'dist', 'index.html');

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(indexPath);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(indexPath);  // Load index.html using relative path
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function trackActiveWindow() {
  setInterval(async () => {
    try {
      const currentWindow = await activeWin.default(); // Updated to use `.default`
      if (mainWindow) {
        mainWindow.webContents.send('active-window', currentWindow);
      }
    } catch (error) {
      console.error('Error tracking active window:', error);
    }
  }, 1000);
}

app.on('ready', () => {
  createWindow();
  trackActiveWindow();
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
