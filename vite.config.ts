import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import galleryThumbsPlugin from './vite-plugin-gallery-thumbs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), galleryThumbsPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
