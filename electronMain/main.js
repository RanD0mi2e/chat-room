import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join("./preload.ts"),
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    installExtension
      .default(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err));
    // 打开开发者工具
    win.webContents.openDevTools();
  }

  // 加载URL or 本地文件
  const url =
    process.env.VITE_DEV_SERVER_URL ||
    `file://${path.join(__dirname, "../dist/index.html")}`;

  win.loadURL(url);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
