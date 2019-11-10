import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modules = {}

const moduleNames = [ 'lang' ]

moduleNames.forEach(name => {
  let module = require(`@/storeModules/${name}`)

  modules[name] = {
    namespaced: true,
    ...module.default
  }
})

const store = new Vuex.Store({
  modules
})

export default store
