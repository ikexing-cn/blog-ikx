/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core', 'pinia'],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['./src/composables'],
      vueTemplate: true
    }),

    Components({
      dts: 'src/types/components.d.ts'
    })
  ]
})
