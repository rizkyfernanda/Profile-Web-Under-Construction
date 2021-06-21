import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'

Vue.use(VueRouter)

const home = { template: Home }

const routes = [
  {path: '/newroute', component: home}
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes 
})

export default router
