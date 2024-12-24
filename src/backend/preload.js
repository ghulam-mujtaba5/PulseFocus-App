// // preload.js (if you're using ES Modules)
// import { contextBridge, ipcRenderer } from 'electron';

// contextBridge.exposeInMainWorld('electron', {
//   sendMessage: (channel, data) => ipcRenderer.send(channel, data),
//   onMessage: (channel, callback) => ipcRenderer.on(channel, callback),
// });
// CommonJS syntax for preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Expose methods here to interact with main process
  sendToMain: (message) => ipcRenderer.send('message', message),
});
