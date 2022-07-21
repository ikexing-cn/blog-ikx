import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import App from './App.vue'
import '~/assets/css/main.css'

const app = createApp(App)
const pinia = createPinia()
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
app.use(pinia)
app.use(router)
app.mount('#app')
