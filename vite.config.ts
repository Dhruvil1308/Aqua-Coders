import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Base path - uncomment and modify if deploying to a subdirectory
  // base: '/',
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Output directory (default is 'dist')
    outDir: 'dist',
    // Optimize large chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-toastify'],
        },
      },
    },
  },
});
