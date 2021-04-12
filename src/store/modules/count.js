export default {
  namespaced: true,
  state: {
    count: 0,
    username: '',
    password: '',
  },
  getters: {
    count (state) {
      return state.count
    },
    user (state) {
      return state.username
    },
    pass (state) {
      return state.password
    },
  },
  mutations: {
    SET_LOG (state, payload) {
      state.username = payload.name
    },
  },
  actions: {
    addUsername ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (resolve) {
          commit('SET_LOG', payload)
          resolve()
        } else {
          console.log(reject)
        }
      })
    },
  },
}
