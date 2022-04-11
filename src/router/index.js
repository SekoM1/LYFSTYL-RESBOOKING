import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Chef from '../views/Chef.vue'
import Menu from '../views/Menu.vue'
import Customers from '../views/Customers.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Booking'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/chef',
    name: 'chef',
    component: Chef
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
