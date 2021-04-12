<template>
  <v-container>
    <v-row>
      <!-- <v-col md="5">
        <v-text-field append-icon="mdi-send" />
      </v-col> -->
      <v-col
        class="d-flex justify-end mr-6"
        cols="12"
      >
        <div justify-end>
          <v-pagination
            v-if="news.data.last_page"
            v-model="page"
            :length="news.data.last_page"
            total-visible="5"
            @input="getNews"
          />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <feed-card
        v-for="(article, i) in news.data.data"
        :key="i"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <v-row align="center">
      <v-col
        class="justify-center"
        cols="12"
      >
        <div class="text-center">
          <v-pagination
            v-if="news.data.last_page"
            v-model="page"
            :length="news.data.last_page"
            total-visible="5"
            @input="getNews"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Utilities
  import { mapGetters } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,
      status: '',
    }),

    computed: {
      ...mapGetters('news', ['news']),
    },

    watch: {},
    mounted () {
      this.getNews()
    },
    methods: {
      getNews () {
        if (this.$route.path === '/index') {
          this.$store.dispatch({
            type: 'news/getNews',
            page: this.page,
          })
        } else if (this.$route.path === '/Umum') {
          this.$store.dispatch({
            type: 'news/getNewsUmum',
            page: this.page,
          })
        } else if (this.$route.path === '/Komunitas') {
          this.$store.dispatch({
            type: 'news/getNewsKomunitas',
            page: this.page,
          })
        } else if (this.$route.path === '/Olahraga') {
          this.$store.dispatch({
            type: 'news/getNewsOlahraga',
            page: this.page,
          })
        }
      },
      up () {
        this.page++
      },
      down () {
        this.page++
      },
      setStatus (val) {
        this.status = val
      },
    },
  }
</script>
