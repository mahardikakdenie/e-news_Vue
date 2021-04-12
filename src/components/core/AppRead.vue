<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          text
          :to="setStatus('')"
        >
          BERANDA
        </v-btn>
        <v-btn
          v-for="(link, i) in categories"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          :to="setStatus(value.name)"
        >
          {{ link.name }}
        </v-btn>
        <v-spacer />

        <v-spacer />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'CoreAppBar',
    data: () => ({}),

    computed: {
      ...mapGetters('news', ['categories', 'news']),
    },
    watch: {},
    mounted () {
      this.getCategory()
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      getCategory () {
        this.$store.dispatch({
          type: 'news/getCategories',
        })
      },
      setStatus (categories) {
        this.router.push({ path: '/' + categories })
      },
    },
  }
</script>
