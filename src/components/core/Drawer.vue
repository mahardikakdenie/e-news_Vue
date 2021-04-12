<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-btn
            text
            to="/index"
          >
            BERANDA
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        v-for="(link, i) in categories"
        :key="i"
        :to="link.name"
        @click="onClick($event, link)"
      >
        <v-list-item-title v-text="link.name" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters('news', ['categories']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },
    mounted () {
      this.getCategory()
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      },
      getCategory () {
        this.$store.dispatch({
          type: 'news/getCategories',
        })
      },
    },
  }
</script>
