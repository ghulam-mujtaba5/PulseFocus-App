// // // preload.js (if you're using ES Modules)
// // import { contextBridge, ipcRenderer } from 'electron';

// // contextBridge.exposeInMainWorld('electron', {
// //   sendMessage: (channel, data) => ipcRenderer.send(channel, data),
// //   onMessage: (channel, callback) => ipcRenderer.on(channel, callback),
// // });
// // CommonJS syntax for preload.js
// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electron', {
//   // Expose methods here to interact with main process
//   sendToMain: (message) => ipcRenderer.send('message', message),
// });
// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  // Function to replace text content of a DOM element
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
  };

  // Update version information of dependencies (chrome, node, electron)
  for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  // Expose IPC methods to the renderer process
  window.electron = {
      // Send a message to the main process
      sendToMain: (message) => ipcRenderer.send('message', message),
  };
});
