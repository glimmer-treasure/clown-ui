import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'clown-ui',
      fileName: (format) => `clown-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'], // 将vue排除，所有导入vue的地方不会把vue源码导入而是转变成require('vue')的形式
      output: {
        globals: {
          vue: 'Vue' // 将全局变量vue改为Vue
        }
      }
    }
  },
})
