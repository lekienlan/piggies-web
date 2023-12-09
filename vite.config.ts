/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { InlineConfig } from 'vitest';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

const hash = Math.floor(Math.random() * 90000) + 10000;

dotenv.config({
  path: (() => {
    switch (process.env.NODE_ENV) {
      case 'production':
        return '.env.production';
      case 'staging':
        return '.env.staging';
      default:
        // To test different env on local, change this line
        return '.env';
    }
  })()
});

export default defineConfig({
  plugins: [react(), eslintPlugin(), tsconfigPaths()],
  assetsInclude: ['**/*.md'],
  publicDir: 'src/assets',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]${hash}.js`,
        chunkFileNames: `[name]${hash}.js`,
        assetFileNames: `[name]${hash}.[ext]`
      }
    }
  },

  test: {
    globals: true,
    environment: 'jsdom'
  }
} as VitestConfigExport);
