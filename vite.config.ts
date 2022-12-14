// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    unocss(),
    react()
  ],
  server: {
    port: 3333
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', 'ts', 'tsx']
  }
})
