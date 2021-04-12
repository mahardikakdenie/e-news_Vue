<template>
  <v-app>
    <core-app-bar />
    <v-container>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content
                  dark
                  two-line
                >
                  <v-list-item-title>
                    <div class="text-center text-h3 font-weight-dark mt-4">
                      {{ news.title }}
                    </div>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <div
                      class=" mt-2 text-center text-subtitle-1 font-weight-light"
                    >
                      {{
                        news.created_at
                          | moment('dddd, MMMM Do YYYY - h:mm:ss a')
                      }}
                    </div>
                    <div class="text-center text-subtitle-1 font-weight-light">
                      {{ news.user.name }}
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-img
                    :src="news.url_thumbnail"
                    height="400"
                    width="400"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-card>
                    <v-card-text max-width="400">
                      <div
                        class="text-center"
                        v-html="news.post"
                      />
                    </v-card-text>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <div class="text-center text-h5 font-weight-dark mt-4">
                      Komentar
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-action-text>
                    <base-komentar :postid="news.id" />
                  </v-list-item-action-text>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Read',
    components: {
      CoreAppBar: () => import('@/components/core/AppRead'),
    },
    data: () => ({}),
    computed: {
      ...mapGetters('news', ['news']),
    },
    mounted () {
      this.getSlug()
    },
    methods: {
      getSlug () {
        this.$store
          .dispatch({
            type: 'news/getSlug',
            slug: this.$route.params.slug,
          })
          .then(response => {})
      },
    },
  }
</script>

<style>
.theme--dark.v-list {
  background: #121212;
  color: #ffffff;
}
</style>
