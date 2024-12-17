// // // // // // const { app, BrowserWindow } = require('electron');
// // // // // // const path = require('path');

// // // // // // let mainWindow;

// // // // // // function createWindow() {
// // // // // //   mainWindow = new BrowserWindow({
// // // // // //     width: 800,
// // // // // //     height: 600,
// // // // // //     webPreferences: {
// // // // // //       nodeIntegration: true,
// // // // // //     },
// // // // // //   });

// // // // // //   mainWindow.loadURL('http://localhost:3001');
// // // // // //   mainWindow.on('closed', () => {
// // // // // //     mainWindow = null;
// // // // // //   });
// // // // // // }

// // // // // // app.whenReady().then(createWindow);

// // // // // // app.on('window-all-closed', () => {
// // // // // //   if (process.platform !== 'darwin') {
// // // // // //     app.quit();
// // // // // //   }
// // // // // // });

// // // // // const { app, BrowserWindow } = require('electron');
// // // // // const path = require('path');

// // // // // let mainWindow;

// // // // // app.on('ready', () => {
// // // // //   mainWindow = new BrowserWindow({
// // // // //     width: 800,
// // // // //     height: 600,
// // // // //     webPreferences: {
// // // // //       contextIsolation: true,
// // // // //       nodeIntegration: false,
// // // // //     },
// // // // //   });

// // // // //   // Load appropriate URL/file
// // // // //   if (process.env.NODE_ENV === 'development') {
// // // // //     mainWindow.loadURL('http://localhost:3001');
// // // // //   } else {
// // // // //     mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
// // // // //   }
// // // // // });

// // // // const { app, BrowserWindow } = require('electron');
// // // // const path = require('path');

// // // // let mainWindow;

// // // // app.on('ready', () => {
// // // //   mainWindow = new BrowserWindow({
// // // //     width: 800,
// // // //     height: 600,
// // // //     webPreferences: {
// // // //       contextIsolation: true, // Improves security
// // // //       nodeIntegration: false, // Avoids mixing Node.js and frontend
// // // //       // preload: path.join(__dirname, 'preload.js'), // Optional: If using a preload script
// // // //     },
// // // //   });

// // // //   // Load appropriate URL/file based on the environment
// // // //   if (process.env.NODE_ENV === 'development') {
// // // //     mainWindow.loadURL('http://localhost:3001'); // Connects to Webpack Dev Server
// // // //   } else {
// // // //     mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html')); // Loads the built app
// // // //   }

// // // //   // Optionally open the DevTools for debugging
// // // //   // mainWindow.webContents.openDevTools();
// // // // });

// // // // // Close the app when all windows are closed
// // // // app.on('window-all-closed', () => {
// // // //   if (process.platform !== 'darwin') {
// // // //     app.quit();
// // // //   }
// // // // });

// // // // app.on('activate', () => {
// // // //   if (BrowserWindow.getAllWindows().length === 0) {
// // // //     app.on('ready');
// // // //   }
// // // // });


// // // //src\backend\main.js
// // // const { app, BrowserWindow } = require('electron');
// // // const path = require('path');

// // // // Declare the main window variable
// // // let mainWindow;

// // // // Function to create the window
// // // function createWindow() {
// // //   // Create the browser window
// // //   mainWindow = new BrowserWindow({
// // //     width: 800,
// // //     height: 600,
// // //     webPreferences: {
// // //       contextIsolation: true,  // Improves security
// // //       nodeIntegration: false,  // Disables Node.js integration in the renderer process
// // //       preload: path.join(__dirname, 'preload.js'), // Optional: you can add a preload script for additional functionality
// // //     },
// // //   });

// // //   // Load the URL or file based on the environment
// // //   if (process.env.NODE_ENV === 'development') {
// // //     // In development, load the local server (Webpack Dev Server)
// // //     mainWindow.loadURL('http://localhost:3001');
// // //   } else {
// // //     // In production, load the bundled index.html file from the dist folder
// // //     const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
// // //     mainWindow.loadFile(indexPath);
// // //   }

// // //   // Open DevTools automatically in development
// // //   if (process.env.NODE_ENV === 'development') {
// // //     mainWindow.webContents.openDevTools();
// // //   }

// // //   // Event when the window is closed
// // //   mainWindow.on('closed', () => {
// // //     mainWindow = null;
// // //   });
// // // }

// // // // Event when Electron has finished initialization
// // // app.on('ready', createWindow);

// // // // Quit the app when all windows are closed (except on macOS)
// // // app.on('window-all-closed', () => {
// // //   if (process.platform !== 'darwin') {
// // //     app.quit();
// // //   }
// // // });

// // // // Re-create the window when the app is activated (macOS behavior)
// // // app.on('activate', () => {
// // //   if (BrowserWindow.getAllWindows().length === 0) {
// // //     createWindow();
// // //   }
// // // });

// // const { app, BrowserWindow } = require('electron');
// // const path = require('path');

// // // Declare the main window variable
// // let mainWindow;

// // // Function to create the window
// // function createWindow() {
// //   // Create the browser window
// //   mainWindow = new BrowserWindow({
// //     width: 800,
// //     height: 600,
// //     webPreferences: {
// //       contextIsolation: true,  // Improves security
// //       nodeIntegration: false,  // Disables Node.js integration in the renderer process
// //     },
// //   });

// //   // Load the URL or file based on the environment
// //   if (process.env.NODE_ENV === 'development') {
// //     mainWindow.loadURL('http://localhost:3001');
// //     mainWindow.webContents.openDevTools();  // This opens DevTools in Electron
// //   } else {
// //     // In production, load the bundled index.html file from the dist folder
// //     const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
// //     mainWindow.loadFile(indexPath);
// //   }

// //   // Open DevTools automatically in development
// //   if (process.env.NODE_ENV === 'development') {
// //     mainWindow.webContents.openDevTools();
// //   }

// //   // Event when the window is closed
// //   mainWindow.on('closed', () => {
// //     mainWindow = null;
// //   });
// // }

// // // Event when Electron has finished initialization
// // app.on('ready', createWindow);

// // // Quit the app when all windows are closed (except on macOS)
// // app.on('window-all-closed', () => {
// //   if (process.platform !== 'darwin') {
// //     app.quit();
// //   }
// // });

// // // Re-create the window when the app is activated (macOS behavior)
// // app.on('activate', () => {
// //   if (BrowserWindow.getAllWindows().length === 0) {
// //     createWindow();
// //   }
// // });

// //src\backend\main.js
// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// let mainWindow;

// // Function to create the window
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       contextIsolation: true,  // Improves security
//       nodeIntegration: false,  // Disables Node.js integration in the renderer process
//     },
//   });

//   // Check if we are in development mode or production mode
//   if (process.env.NODE_ENV === 'development') {
//     // In development, load the local server (Webpack Dev Server)
//     mainWindow.loadURL('http://localhost:3001');
//     mainWindow.webContents.openDevTools();  // This opens DevTools automatically in Electron
//   } else {
//     // In production, load the bundled index.html file from the dist folder
//     const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
//     mainWindow.loadFile(indexPath);
//   }

//   // Event when the window is closed
//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// // Event when Electron has finished initialization
// app.on('ready', createWindow);

// // Quit the app when all windows are closed (except on macOS)
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// // Re-create the window when the app is activated (macOS behavior)
// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Function to create the window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,  // Improves security
      nodeIntegration: false,  // Disables Node.js integration in the renderer process
    },
  });

  // Check if we are in development mode or production mode
  if (process.env.NODE_ENV === 'development') {
    // In development, load the local server (Webpack Dev Server)
    mainWindow.loadURL('http://localhost:3001');  // Ensure this matches your React dev server's URL
    mainWindow.webContents.openDevTools();  // This opens DevTools automatically in Electron
  } else {
    // In production, load the bundled index.html file from the build folder
    const indexPath = path.join(__dirname, '..', 'build', 'index.html');  // Adjust path based on your structure
    mainWindow.loadFile(indexPath);  // Make sure this path is correct for your production build
  }

  // Event when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Event when Electron has finished initialization
app.on('ready', createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-create the window when the app is activated (macOS behavior)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
