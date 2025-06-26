import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@/views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@/layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@/hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@/api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@/services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@/store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@/constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@/config': fileURLToPath(new URL('./src/config', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          // 将 node_modules 中的依赖分类
          if (id.includes('node_modules')) {
            // React 核心库
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // React Router
            if (id.includes('react-router')) {
              return 'router'
            }
            // Ant Design 核心
            if (id.includes('antd') && !id.includes('@ant-design/icons')) {
              return 'antd-vendor'
            }
            // Ant Design 图标
            if (id.includes('@ant-design/icons')) {
              return 'antd-icons'
            }
            // RC 组件（Ant Design 的底层组件）
            if (id.includes('rc-') || id.includes('@rc-component')) {
              return 'rc-components'
            }
            // 网络请求相关
            if (id.includes('axios')) {
              return 'http-vendor'
            }
            // 工具库
            if (
              id.includes('lodash') || 
              id.includes('dayjs') || 
              id.includes('classnames') ||
              id.includes('scroll-into-view')
            ) {
              return 'utils-vendor'
            }
            // CSS 相关
            if (
              id.includes('@emotion') || 
              id.includes('stylis') ||
              id.includes('@ant-design/cssinjs')
            ) {
              return 'css-vendor'
            }
            // 其他第三方库
            return 'vendor'
          }
        }
      }
    },
    // 设置 chunk 大小警告限制
    chunkSizeWarningLimit: 1000
  }
})
