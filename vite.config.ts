import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import net from 'net'

// const IPC_PORT = 8124;

// plugins
/* const sentPortToElectron = (): Plugin => {
  return {
    name: "send-port-to-electron",
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        const address = server.httpServer?.address();
        const port =
          typeof address === "object" && address?.port ? address.port : "3000";

        // 连接到 Electron 的 IPC 服务器并发送端口信息
        const client = new net.Socket();
        client.connect(IPC_PORT, "localhost", () => {
          client.write(port.toString());
          client.end(); // 发送完端口信息后断开连接
        });
      });
    },
  };
}; */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 确保资源路径相对，以便在 Electron 中正常加载
  build: {
    outDir: 'dist', // 生产环境的输出目录
  },
  server: {
    port: 3100, // 本地开发端口
  }
});
