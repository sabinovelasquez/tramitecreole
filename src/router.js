import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Afc from './views/Afc.vue'
import Bne from './views/Bne.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/afc',
      name: 'afc',
      component: Afc
    },
    {
      path: '/bne',
      name: 'bne',
      component: Bne
    }
  ]
})
