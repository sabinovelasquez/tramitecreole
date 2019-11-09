import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import Sticky from 'vue-sticky-directive'
import * as VueGoogleMaps from 'vue2-google-maps'
import '@/assets/global.scss'

import { firestorePlugin } from 'vuefire'

Vue.prototype.$langs = ['es', 'en']

Vue.use(VueMaterial)
Vue.use(Sticky)
Vue.use(firestorePlugin)
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
