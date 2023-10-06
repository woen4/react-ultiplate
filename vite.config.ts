import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import tspaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), tspaths()],
  build: {
    minify: 'terser',
  },
})
