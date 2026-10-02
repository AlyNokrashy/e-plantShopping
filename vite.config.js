import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base keeps every asset path working both in local development and
// when the built site is served from a GitHub Pages project subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
})
