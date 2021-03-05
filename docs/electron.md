---
id: electron
title: Electron w/ CRA
---

Instructions from [this post](https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e).

Install the following packages within your React app.

```
npm i electron-is-dev
npm i -D concurrently cross-env electron electron-devtools-installer wait-on
```

Add the following to `public/electron.js`

```js
const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) => console.log(`An error occurred: , ${error}`));
  }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

Add these lines to your `package.json`

```json
"main": "public/electron.js",
"homepage": "./",
```

Add these lines to the `scripts` section of your `package.json`

```json
"dev": "concurrently -k \"cross-env BROWSER=none npm start\" \"npm:electron\"",
"electron": "wait-on tcp:3000 && electron ."
```

Run the following. It will add some `dev-dependencies` for building, a couple of `scripts` in `package.json`, and an Electron-Forge config in `package.json`.

```sh
npx @electron-forge/cli import
```

This changes the `start` script in `package.json`. Change `start` back to this:

```json
"start": "react-scripts start",
```

At this point if you run `npm run dev`, your app should come up in Electron. If you get an error saying `'electron' is not recognized as an internal or external command`, try `rm -rf node_modules` and `npm install` again. Unsure why this problem happens, but I typically blame the combination of Windows + VS Code + Git Bash.