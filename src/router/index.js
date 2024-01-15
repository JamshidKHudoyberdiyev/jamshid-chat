import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import Chat from '@/components/Chat.vue'
import ErrororPage from '@/components/ErrororPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      props: true
    },
    {
      path: '/chat/:name',
      name: 'chat',
      component: Chat,
      props: true,
      beforeEnter(to, from, next) {
        if (to.params.name) {
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorPage',
      component: ErrororPage
    }
  ]
})

export default router
