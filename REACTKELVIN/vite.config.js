import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // Ganti sesuai port yang kamu inginkan
    strictPort: true, // Supaya jika port sudah dipakai, Vite akan error dan tidak auto-cari port lain
  },
});
