
const LangModule = {
  state: {
    lang: 'es'
  },
  actions: {
    setLang ({commit}, {lang}) {
      commit('setLang', {lang})
    }
  },
  getters: {
    lang: state => state.lang
  },
  mutations: {
    setLang (state, {lang}) {
      state.lang = lang
    }
  }
}

export default LangModule

