const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile('index.html');
}

ipcMain.on('minimize', () => { if (win) win.minimize(); });
ipcMain.on('maximize', () => { if (win) win.isMaximized() ? win.unmaximize() : win.maximize(); });

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});