import { spawn } from "child_process";
import { createServer } from 'vite'

(async () => {
  // 启动 Vite 开发服务器
  const viteServer = await createServer()
  await viteServer.listen()

  const port = viteServer.config.server.port || 3000

  // 启动 Electron 主进程
  const electronProcess = spawn('npx', [
    'electron',
    './electronMain/main.js', // 主进程的 TypeScript 文件路径
    '--remote-debugging-port=9223'
  ], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      VITE_DEV_SERVER_URL: `http://localhost:${port}`,
    },
  })

  const closeAllProcesses = () => {
    if (electronProcess) {
      electronProcess.kill()  // 关闭 Electron 进程
    }
    viteServer.close()  // 关闭 Vite 服务
    process.exit()      // 退出当前脚本
  }

  process.on('SIGINT', closeAllProcesses)  // 监听 Ctrl + C
  process.on('SIGTERM', closeAllProcesses) // 监听终止信号

  electronProcess.on('close', () => {
    closeAllProcesses()
  })
})().catch(() => {
  process.exit()
});
