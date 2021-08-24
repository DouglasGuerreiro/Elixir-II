const { create } = require('domain');
const {app, BrowserWindow} = require('electron');



function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadfile(__dirname + '/src/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);