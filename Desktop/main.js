const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const db = require('./db.ts')

let win

function createWindow(){
    win = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('login.html')
}

app.whenReady().then(createWindow)

ipcMain.handle('login', (e, data) => {
    let user = db.findUser(data)

    if(!user){
        return { ok: false }
    }

    return { ok: true }
})

ipcMain.handle('register', (e, data) => {
    let ok = db.createUser(data)
    return { ok }
})