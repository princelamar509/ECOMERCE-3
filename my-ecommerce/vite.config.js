// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <-- Required for Vercel + HashRouter to work properly
  plugins: [react()],
});
