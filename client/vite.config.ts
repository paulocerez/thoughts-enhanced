import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // specify the output directory
    emptyOutDir: true // empty the output directory before building
  },
  server: {
    watch: {
	// usePolling -> watch in file system for changes at a regular interval, works across different operating systems
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,  // prevents Vite from starting if Port is used already
    port: 5173
  } 
})
