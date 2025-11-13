import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // When using custom domain (jul.sturle.dev), change this to: base: '/'
  // For repository URL (github.io/Entur-Jul), use: base: '/Entur-Jul/'
  base: '/',
  server: {
    port: 3000
  }
})
