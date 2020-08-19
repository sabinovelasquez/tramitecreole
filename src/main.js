import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import Sticky from 'vue-sticky-directive'
import VueScrollTo from 'vue-scrollto'
import defaultConfig from './config/defaultConfig'
import '@/assets/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firestorePlugin } from 'vuefire'

import { 
  faPhone,
  faMobileAlt,
  faMapMarkerAlt,
  faBuilding,
  faLaptop,
  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter  
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faPhone,
  faMobileAlt,
  faMapMarkerAlt,
  faBuilding,
  faLaptop,
  faEnvelope,
  faFacebook,
  faInstagram,
  faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAnalytics, { id: defaultConfig.ANALYTICS_ID })
Vue.use(VueMaterial)
Vue.use(VueScrollTo, {offset: -70})
Vue.use(Sticky)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
