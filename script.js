
function createWindow() {
    win = new BrowserWindow({
      width: 800,
      height: 700,
  
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });
    win.loadFile("index.html");
  }
  