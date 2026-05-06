import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BasicPhaser/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
