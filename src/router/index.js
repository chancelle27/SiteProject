import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RedacView from '../views/RedacView.vue'
import PopularView from '../views/PopularView.vue'
import ActiviteView from '../views/ActiviteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/redaction',
      name: 'redaction',
      component: RedacView
    },
    {
      path: '/populaire',
      name: 'populaire',
      component: PopularView
    },
    {
      path: '/activite',
      name: 'activite',
      component: ActiviteView
    }
  ]
})

export default router
