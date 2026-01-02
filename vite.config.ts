import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alfurqan-website-v3/',
  build: {
    assetsDir: 'assets'
  },
  plugins: [react()],
});
