import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
export default {
  namespaced: true,
  state: {
    news: [
      {
        meta: [{}],
        data: [
          {
            user: [{}],
            category: [{}],
            tags: [{}],
            comments: [{}],
            thumbnail: [{}],
            last_page: 1,
          },
        ],
      },
    ],
    category: [
      {
        meta: [{}],
        data: [{}],
      },
    ],
  },
  getters: {
    news: (state, payload) => {
      return state.news
    },
    categories: state => {
      return state.category
    },
  },
  mutations: {
    GET_NEWS: (state, payload) => {
      state.news = payload
    },
    GET_CATEGORIES: (state, payload) => {
      state.category = payload
    },
    GET_SLUG: (state, payload) => {
      state.news = payload
    },
  },
  actions: {
    getNews: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = {
          id: '-id',
          status: 'publish',
          page: payload.page,
        }
        axios
          .get('api/post/frontend', { params: params })
          .then(response => {
            const post = response.data
            commit('GET_NEWS', post)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getNewsUmum: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = {
          id: '-id',
          category: 'Umum',
          status: 'publish',
          page: payload.page,
        }
        axios
          .get('/api/post/frontend', { params: params })
          .then(response => {
            const post = response.data
            commit('GET_NEWS', post)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getNewsKomunitas: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = {
          id: '-id',
          category: 'Komunitas',
          status: 'publish',
          page: payload.page,
        }
        axios
          .get('api/post/frontend', { params: params })
          .then(response => {
            const post = response.data
            commit('GET_NEWS', post)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getNewsOlahraga: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        const params = {
          id: '-id',
          category: 'Olahraga',
          status: 'publish',
          page: payload.page,
        }
        axios
          .get('/api/post/frontend', { params: params })
          .then(response => {
            const post = response.data
            commit('GET_NEWS', post)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getCategories ({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/category/frontend')
          .then(response => {
            const categories = response.data.data
            commit('GET_CATEGORIES', categories)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getSlug: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/post/frontend/${payload.slug}`)
          .then(response => {
            const data = response.data.data
            commit('GET_SLUG', data)
            resolve(response)
          })
          .catch(e => {
            reject(e)
          })
      })
    },
  },
}
