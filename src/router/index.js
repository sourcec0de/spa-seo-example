import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'
import Page1 from '../components/views/Page1.vue'
import Page2 from '../components/views/Page2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]

const router = new VueRouter({
  routes
})

export default router
