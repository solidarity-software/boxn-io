import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  }),],
  build: {
    watch: {
      clearScreen: true
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@boxn-io/shared',
      formats: ['es', 'umd'],
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
