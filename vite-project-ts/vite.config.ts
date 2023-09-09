// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // extensions: ['.js', '.mjs']
  },
  server: {
    hmr:true,
  }
})
