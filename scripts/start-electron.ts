import { spawn } from "child_process";
import waitOn from "wait-on";
import net from "net";

const IPC_PORT = 8124;

(async () => {
  const server = net.createServer()
  server.listen(IPC_PORT)

  const viteProcess = spawn("npx", ["vite"], { stdio: "pipe" });

  let vitePort: string | null = null;

  viteProcess.stdout.on("data", async (data) => {
    const output = Buffer.isBuffer(data) ? data.toString() : String(data);

    const match = output.match(/localhost:(\d+)/);
    if (match) {
      vitePort = match[1];

      // 等待vite服务器启动
      await waitOn({ resources: [`http://localhost:${vitePort}`] });

      // 启动electron服务并传入端口号
      const electronProcess = spawn(
        "electron",
        ["-r", "ts-node/register", "electronMain/main.ts"],
        {
          env: {
            ...process.env,
            VITE_DEV_SERVER_URL: `http://localhost:${vitePort}`,
          },
          stdio: "inherit",
        }
      );

      // electron进程关闭后，同时关闭vite进程
      electronProcess.on("close", () => viteProcess.kill());
    }
  });
})();
