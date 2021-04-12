import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import arc from './modules/all'
import news from './modules/news'
import komentar from './modules/komentar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: count,
    b: arc,
    news: news,
    komentar: komentar,
  },
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '#!',
      },
      {
        text: 'About',
        href: '#about',
      },
    ],
  },
  getters: {
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {},
})
