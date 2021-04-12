import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
export default {
  namespaced: true,
  state: {
    komentar: [
      {
        meta: [{}],
        data: [{}],
      },
    ],
  },
  getters: {
    komentar: state => {
      return state.komentar
    },
  },
  mutations: {
    GET_KOMENTAR: (state, payload) => {
      state.komentar = payload
    },
    PUSH_KOMENTAR: (state, payload) => {
      state.komentar.push(payload)
    },
  },
  actions: {
    getKomentar: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = {
          post_id: payload.post_id,
        }
        axios
          .get('/api/response/frontend', {
            params: params,
          })
          .then(response => {
            const data = response.data.data
            commit('GET_KOMENTAR', data)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    sendCommentar: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = { ...payload }
        axios
          .post('/api/response/frontend', params)
          .then(response => {
            const data = response.data.data
            commit('PUSH_KOMENTAR', data)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
  },
}
