import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import MesCreations from '../views/MesCreations.vue'
import Precommande from '../views/Precommande.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/Precommande',
    name: 'Precommande',
    component: Precommande
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/MesCreations',
    name: 'MesCreations',
    component: MesCreations
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
