import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/PostView.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/post/PostList.vue')
      },
      {
        path: ':id',
        component: () => import('../components/post/PostItem.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router