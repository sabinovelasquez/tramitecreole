import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'
import '@/assets/global.scss'

Vue.use(VueMaterial)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAkclB6ONms5kh2Ev72wuRMCaco965FXaA',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
