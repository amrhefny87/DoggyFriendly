import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Sitters from '../views/Sitters.vue'
import FormDogs from '../views/FormDogs.vue'
import FormSitters from '../views/FormSitters.vue'
import AdType from '../views/AdType.vue'
import Show from '../views/Show.vue'
import EditDogs from '../views/EditDogs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sitters',
    name: 'Sitters',
    component: Sitters
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/formdogs',
    name: 'formdogs',
    component: FormDogs
  },
  {
    path: '/formsitters',
    name: 'formsitters',
    component: FormSitters
  },
  {
    path: '/adtype',
    name: 'Adtype',
    component: AdType
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/edit',
    name: 'EditDogs',
    component: EditDogs,
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
