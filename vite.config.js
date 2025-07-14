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
          entry: fileURLToPath(new URL('./src/components/FunctionalCalendar.vue', import.meta.url)),
          name: 'FunctionalCalendar',
          fileName: (format) => {
            if (format === 'es') return 'FunctionalCalendar.common.js'
            if (format === 'umd') return 'FunctionalCalendar.umd.js'
            return `FunctionalCalendar.${format}.js`
          },
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['vue'],
          output: [
            // ES/CommonJS format
            {
              format: 'es',
              entryFileNames: 'FunctionalCalendar.common.js',
              globals: {
                vue: 'Vue'
              }
            },
            // UMD format (unminified)
            {
              name: 'FunctionalCalendar',
              format: 'umd',
              entryFileNames: 'FunctionalCalendar.umd.js',
              globals: {
                vue: 'Vue'
              }
            }
          ]
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
  }
})
