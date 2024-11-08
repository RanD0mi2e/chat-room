import { app, BrowserWindow } from "electron";
import * as path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
      contextIsolation: true,
    },
  });

  // 加载URL or 本地文件
  const url =
    process.env.VITE_DEV_SERVER_URL ||
    `file://${path.join(__dirname, "../dist/index.html")}`;

  win.loadURL(url);
};

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
