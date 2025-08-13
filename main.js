const { app, BrowserWindow } = require('electron');
const path = require('path'); // We'll use this for reliability

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      // It's good practice to preload scripts, but not needed for this app
    }
  });

  // Load the index.html of the app.
  win.loadFile(path.join(__dirname, 'index.html'));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});