const { contextBridge, ipcRenderer } = require('electron');

window.ipcRenderer = ipcRenderer;
console.log('preloading');

const validChannels = ['TEST', 'WRITE_FILE'];
contextBridge.exposeInMainWorld(
  'ipc', {
    send: (channel, data) => {
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    on: (channel, func) => {
      if (validChannels.includes(channel)) {
        // Strip event as it includes `sender` and is a security risk
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
  },
);
