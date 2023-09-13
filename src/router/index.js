import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RedacView from '../views/RedacView.vue'
import PopularView from '../views/PopularView.vue'
import ActiviteView from '../views/ActiviteView.vue'
import DashView from '../views/DashView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'


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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView
    }
  ]
})

export default router
