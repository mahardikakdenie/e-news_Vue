<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      height="350"
      color="grey lighten-1"
      dark
      @click="goTo(value.slug)"
    >
      <v-img
        :src="value.url_thumbnail"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
        @click="goTo(value.slug)"
      >
        <v-row class="fill-height text-right ma-0">
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.title }}
            </v-chip>

            <!-- <h3 class=" font-weight-bold mb-2">
              {{ value.title }}
            </h3> -->

            <div class="">
              {{ value.created_at | moment('dddd, MMMM Do YYYY') }}<br>{{
                value.category.name
              }}
            </div>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="red darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.views ? value.views : '0' }}
            </v-chip>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop="goTo(value.slug)"
            >
              Read More
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'FeedCard',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
    data: () => ({
      pictureOfThumbnailAll: [
        require('@/assets/logo.png'),
        require('@/assets/Lapangan.jpg'),
        require('@/assets/Kota.jpg'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
      ],
    }),
    computed: {
      ...mapGetters('news', ['news']),
    },
    mounted () {},
    methods: {
      goTo (slug) {
        this.$router.push({ path: '/news/' + slug })
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
