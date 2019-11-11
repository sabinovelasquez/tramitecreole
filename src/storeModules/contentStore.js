const ContentStoreModule = {
  state: {
    content: null
  },
  actions: {
    setContent ({commit}, {obj}) {
      commit('setContent', {obj})
    }
  },
  getters: {
    content: state => state.content
  },
  mutations: {
    setContent (state, {obj}) {
      state.content = obj
    }
  }
}

export default ContentStoreModule