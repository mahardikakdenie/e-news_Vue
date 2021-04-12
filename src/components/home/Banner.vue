<template>
  <base-card dark>
    <!-- <v-img
      :src="news.thumbnail.url"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="text-h2 font-weight-light">
            The Art Of Travel
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, One flight at a time
          </div>

          <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn>
        </v-col>
      </v-row>
    </v-img> -->
  </base-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'HomeBanner',
    computed: {
      ...mapGetters('news', ['news']),
    },
    mounted () {
      this.getLog()
    },
    methods: {
      getLog () {
        console.log(this.$route)
      },
    },
  }
</script>
