import { createRouter, createWebHashHistory } from 'vue-router'

import EditarComuna from '../components/comunas/EditarComuna,vue'
import CrearComuna from '../components/comunas/NewrComuna.vue'
import Comunas from '../views/Comunas.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
   path: '/',
   name: 'home',
   component: Home
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    name: 'EditarComunas',
    component: EditarComunas
  },
  {
    path: '/add-comuna/:id',
    name: 'NewComuna',
    name: 'NewComunas',
    component: NewComunas
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
