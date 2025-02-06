import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
//  base: "https://daniyalimr.github.io/my-portfolio/", 
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // 1000 KB
  },
})
