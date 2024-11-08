
import { app, BrowserWindow } from "electron";
import * as path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join("./preload.ts"),
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // 打开开发者工具
    win.webContents.openDevTools()
  }

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
