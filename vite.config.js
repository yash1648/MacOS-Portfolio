import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {resolve,dirname} from 'path'
import {fileURLToPath} from 'url'


// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    host: true
  },
  resolve: {
     alias: {
       '#components':resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
       '#constants':resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
       '#store':resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
       '#hoc':resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
       '#windows':resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
     }
  },
  build: {
    target: 'ES2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'gsap': ['gsap'],
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['react-tooltip', 'lucide-react'],
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],
})

