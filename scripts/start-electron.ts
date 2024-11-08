import { spawn } from "child_process";
import net from "net";

const IPC_PORT = 8124;

(async () => {
  const server = net.createServer();
  server.listen(IPC_PORT);

  // 启动vite
  const viteProcess = spawn("npx", ["vite"], { stdio: "inherit" });

  server.on("connection", (socket) => {
    socket.on("data", (data) => {
      const vitePort = data.toString();

      // 启动electron服务并传入端口号
      const electronProcess = spawn(
        "npx",
        ["--experimental-modules", "tsx", "electronMain/main.ts"],
        {
          env: {
            ...process.env,
            VITE_DEV_SERVER_URL: `http://localhost:${vitePort}`,
          },
          stdio: "inherit",
        }
      );

      // electron进程关闭后，同时关闭vite进程
      electronProcess.on("close", () => {
        server.close()
        viteProcess.kill()
      });
    });
  });
})();
