import type { RouteRecordRaw } from 'vue-router'

// If you use vite-plugin-vue-layouts and vite-plugin-pages
// you can delete this file
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404.vue'),
  },
]

export default routes