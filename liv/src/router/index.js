import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastrosView from "../views/CadastrosView.vue"
import CadastradosView from "../views/CadastradosView.vue"
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard},
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastrosView
    },
    {
      path: '/cadastrados',
      name: 'Cadastrados',
      component: CadastradosView
    },
  ]
})

export default router;
