import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  define: { 'process.env': {} },
  build: {
    minify: 'esbuild',
    sourcemap: 'inline',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'aieditor',
      // fileName: (format) => `index.${format}.js`,
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },
  plugins: [
    dts({ rollupTypes: true })
    // legacy({
    //     targets: ['defaults', 'not IE 11','chrome 52'],
    // }),
  ]
})
