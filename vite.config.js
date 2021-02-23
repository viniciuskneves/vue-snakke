import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const BUILD_LIB = process.env.BUILD_LIB !== 'false';

const viteConfig = defineConfig({
  plugins: [vue()],
});

if (BUILD_LIB) {
  viteConfig.build = {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'Vue Snakke',
    },
    rollupOptions: {
      external: ['vue'],
    },
  };
}

export default viteConfig;
