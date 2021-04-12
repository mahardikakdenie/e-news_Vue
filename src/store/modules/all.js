export default {
  state: {
    namespaced: true,
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
    delta: undefined,
    contents: '',
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) {
          continue
        }

        const text = article.category

        categories.push({
          text,
          href: '#' + article.category,
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
    delta: ({ delta }) => delta,
    contents: ({ contents }) => contents,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setDelta (state, payload) {
      state.delta = payload
    },
    setContent (state, payload) {
      state.contents = payload
    },
  },
}
