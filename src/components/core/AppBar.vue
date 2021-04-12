<template>
  <div>
    <v-app-bar
      app
      flat
      class="d-none d-sm-flex"
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
            to="/index"
          >
            BERANDA
          </v-btn>
          <v-btn
            v-for="(link, i) in categories"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down"
            text
            :to="'/' + link.name"
          >
            {{ link.name }}
          </v-btn>
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
        </v-row>
      </v-container>
    </v-app-bar>
    <!--  -->
    <v-app-bar
      app
      flat
      class="d-flex d-sm-none"
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
            v-if="$route.path === '/Umum'"
            text
            to="/Umum"
          >
            Umum
          </v-btn>
          <v-btn
            v-if="$route.path === '/Komunitas'"
            text
            to="/Komunitas"
          >
            Komunitas
          </v-btn>
          <v-btn
            v-if="$route.path === '/Olahraga'"
            text
            to="/Olahraga"
          >
            Olahraga
          </v-btn>
          <v-btn
            v-if="$route.path === '/index'"
            text
            to="/index"
          >
            BERANDA
          </v-btn>
          <v-btn
            v-for="(link, i) in categories"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down"
            text
            :to="'/' + link.name"
          >
            {{ link.name }}
          </v-btn>
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
  <!--  -->
</template>

<script>
// Utilities
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'CoreAppBar',
    data: () => ({}),

    computed: {
      ...mapGetters(['links']),
      ...mapGetters('a', ['user']),
      ...mapGetters('news', ['categories']),
      ...mapGetters('news', ['news']),
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
      setStatus (val) {
        this.status = val
        console.log('hai')
      },
    },
  }
</script>
