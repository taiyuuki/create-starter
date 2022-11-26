import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rollupDts from 'vite-plugin-dts'
import path from 'path'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupDts({
      outputDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
    }),
    vue({ reactivityTransform: true }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
      components: resolve('src/components'),
    },
  },
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'HelloWorld',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { HelloWorld: 'HelloWorld' } },
      plugins: [],
    },
  },
})