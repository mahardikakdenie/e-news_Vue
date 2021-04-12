<template>
  <v-app>
    <v-row>
      <v-col
        cols="12"
        md="12"
      >
        <v-card-text>
          <v-row>
            <v-col
              v-for="(item, i) in komentar"
              :key="i"
              cols="12"
            >
              <v-card class="mt-n5">
                <div class="d-flex flex-no-wrap justify-start align-start">
                  <div class="d-flex flex-column align-center">
                    <v-avatar
                      class="ma-3"
                      size="32"
                    >
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      />
                    </v-avatar>
                  </div>

                  <div class="d-flex flex-column align-start flex-grow-1">
                    <h1>
                      <v-card-title
                        class="text--primary ml-n3 btn"
                        to="/"
                      >
                        Anonim
                      </v-card-title>
                    </h1>
                    <v-card-text
                      class="text--primary mt-n5 ml-n3"
                      v-text="item.comments"
                    />
                  </div>
                  <div class="d-flex align-center align-self-sm-center">
                    <!--  -->
                  </div>
                </div>
              </v-card>
            </v-col>
            <br>
            <v-col
              cols="12"
              md="12"
            >
              <v-card class="mt-n5">
                <div class="d-flex flex-no-wrap justify-start align-start">
                  <div class="d-flex flex-column align-center">
                    <v-avatar
                      class="ma-3"
                      size="32"
                    >
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      />
                    </v-avatar>
                  </div>

                  <div class="d-flex flex-column align-start flex-grow-1">
                    <v-form
                      style="width: 100%"
                      @submit.prevent="sendCommentar"
                    >
                      <v-textarea
                        v-model="comments"
                        label="comments as a Guest"
                        placeholder="comments as a Guest"
                      />
                    </v-form>
                  </div>

                  <div class="d-flex align-center align-self-sm-center">
                    <v-tooltip
                      right
                      color="blue"
                    >
                      <!--  -->
                      <template v-slot:activator="{ on, attrs }">
                        <!--  -->
                        <v-btn
                          icon
                          color="blue"
                          v-bind="attrs"
                          v-on="on"
                          @click.prevent="sendCommentar"
                        >
                          <v-icon>
                            mdi-send
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>send</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Comments',
    props: {
      postid: {
        type: Number,
        default: undefined,
      },
    },
    data: () => ({
      comments: '',
    }),
    computed: {
      ...mapGetters('komentar', ['komentar']),
    },
    mounted () {
      this.getKomentar()
    },
    methods: {
      getKomentar () {
        this.$store.dispatch({
          type: 'komentar/getKomentar',
          post_id: this.postid,
        })
      },
      sendCommentar () {
        this.$store.dispatch({
          type: 'komentar/sendCommentar',
          comments: this.comments,
          post_id: this.postid,
        })
        this.comments = ''
      // updates
      },
    },
  }
</script>

<style></style>
