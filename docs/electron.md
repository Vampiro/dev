---
id: electron
title: Electron w/ CRA
---

Instructions from [this post](https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e).

## Setup

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
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // remove top menu (File, Edit, View, etc.)
  win.removeMenu();

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }

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

Add these lines to your `package.json`. Fill in the `author` and `description` fields.

```json
"author": "",
"description": "",
"main": "public/electron.js",
"homepage": "./",
```

Add these lines to the `scripts` section of your `package.json`

```json
"dev": "concurrently -k \"cross-env BROWSER=none npm start\" \"npm:electron\"",
"electron": "wait-on tcp:3000 && electron-forge start",
```

Run the following. It will add some `dev-dependencies` for building, a couple of `scripts` in `package.json`, and an Electron-Forge config in `package.json`.

```bash
npx @electron-forge/cli import
```

This changes the `start` script in `package.json`. Within the `scripts` in `package.json`, change `start`, `package`, and `make` to the following:

```json
"start": "react-scripts start",
"package": "npm run build && electron-forge package",
"make": "npm run build && electron-forge make"
```

Add `/out` to your `.gitignore` if it isn't already there.

In `package.json` there should be a `config.forge.packagerConfig` object. Add the following to `packagerConfig`.

```json
"asar": true,
"name": "YOUR APP NAME"
```

## Running in Dev Mode

At this point if you run your app in Electron in dev mode with:

```bash
npm run dev
```

If you get an error saying `'electron' is not recognized as an internal or external command`, you can try re-installing your `node_modules`. Unsure why this problem happens, but it may be a problem with Windows + VS Code + Git Bash.

```bash
rm -rf node_modules
npm install
npm run dev
```

## Production Build

To package your application so that it can be executed run:

```bash
npm run make
```

Your built app should be in the `out` directory e.g. `out/MY APP-win32-x64/MY APP.exe`

## Next Steps

- Custom Icons (docs here: https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e)
