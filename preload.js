const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    login: (data) => ipcRenderer.invoke('login', data),
    register: (data) => ipcRenderer.invoke('register', data)
})