import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Указываем выходную директорию для сборки
    outDir: 'dist',
    assetsDir: 'assets', // Директория для копирования статических файлов

    // Добавляем правило для копирования статических файлов
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      // Создайте псевдоним для пути к вашему файлу scene.gltf
      '@scene': resolve(__dirname, 'src/assets/donutModell/scene.gltf'),
    },
  },
});