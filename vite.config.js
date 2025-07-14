import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build configuration
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: './index.js',
          name: 'FunctionalCalendar',
          fileName: 'FunctionalCalendar',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            exports: 'named',
            globals: {
              vue: 'Vue'
            }
          }
        },
        outDir: 'dist',
        copyPublicDir: false,
        sourcemap: true,
        minify: true,
        // cssCodeSplit: false,
      }
    }
  }

  // Default development configuration
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue': 'vue/dist/vue.esm-bundler.js'
      },
    },
    build: {
      rollupOptions: {
        external: ['vue'],
      },
    },
  }
})
