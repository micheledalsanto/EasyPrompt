import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'devserver-main--aesthetic-kitsune-1451f2.netlify.app'
    ]
  }
});
