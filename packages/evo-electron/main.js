const { app, BrowserWindow, shell } = require('electron');
const { irServerFactory } = require('@evo/server');
const { staticWebServerFactory } = require('@evo/static-web-server');

let mainWindow = null;
let forceQuit = false;
const server = staticWebServerFactory.createInstance(__dirname);
const webSocketsServer = irServerFactory.createInstance();

app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    // start the static file server
    server.start();

    // start the data server
    webSocketsServer.start();

    mainWindow = new BrowserWindow({
        width: 1150,
        height: 750,
        webPreferences: {
            webSecurity: false,
        },
    });

    mainWindow.loadURL('http://localhost:3000');

    // show window once on first load
    mainWindow.webContents.once('did-finish-load', () => {
        mainWindow.show();
    });

    mainWindow.webContents.on('did-finish-load', () => {
        // Handle window logic properly on macOS:
        // 1. App should not terminate if window has been closed
        // 2. Click on icon in dock should re-open the window
        // 3. ⌘+Q should close the window and quit the app
        if (process.platform === 'darwin') {
            mainWindow.on('close', (error) => {
                if (!forceQuit) {
                    error.preventDefault();
                    mainWindow.hide();
                }
            });

            app.on('activate', () => {
                mainWindow.show();
            });

            app.on('before-quit', () => {
                forceQuit = true;
            });
        } else {
            mainWindow.on('closed', () => {
                mainWindow = null;
            });
        }
    });

    const handleRedirect = (event, url) => {
        if (url != mainWindow.webContents.getURL()) {
            event.preventDefault();
            shell.openExternal(url);
        }
    };

    mainWindow.webContents.on('will-navigate', handleRedirect);
    mainWindow.webContents.on('new-window', handleRedirect);
});
