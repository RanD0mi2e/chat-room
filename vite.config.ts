import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: './', // 确保资源路径相对，以便在 Electron 中正常加载
  build: {
    rollupOptions: {
      output: {
        interop: "compat"
      }
    },
    outDir: 'dist', // 生产环境的输出目录
  },
  server: {
    port: 3100, // 本地开发端口
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
});
