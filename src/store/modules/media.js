import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
export default {
  namespaced: true,
  state: {
    news: {
      meta: {},
      data: {},
    },
    drawer: false,
  },
  getters: {
    news: state => {
      return state.news
    },
  },
  mutations: {
    GET_NEWS: (state, payload) => {
      state.news = payload
    },
  },
  actions: {
    getNews: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/post')
          .then(response => {
            if (response.data.meta.status) {
              const post = response.data.data
              commit('GET_NEWS', post)
              resolve(response)
            }
          })
          .catch(e => {
            reject(e)
          })
      })
    },
  },
}
