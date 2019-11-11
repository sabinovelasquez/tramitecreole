import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import Sticky from 'vue-sticky-directive'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'
import defaultConfig from './config/defaultConfig'
import '@/assets/global.scss'

import { firestorePlugin } from 'vuefire'

Vue.use(VueMaterial)
Vue.use(VueScrollTo, {offset: -70})
Vue.use(Sticky)
Vue.use(firestorePlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: defaultConfig.GOOGLEMAPS_API_KEY,
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
