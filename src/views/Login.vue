<template>
  <v-app>
    <v-img
      v-if="img"
      :src="img"
    >
      <v-container class="mt-12">
        <v-row justify="center">
          <v-col
            cols="12"
            lg="8"
          >
            <base-material-card icon="mdi-eye">
              <template v-slot:heading>
                <div class="text-h5 font-weight-light">
                  Login
                </div>
              </template>
              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-text-field
                        v-model="username"
                        label="Username Or Email"
                        placeholder="Masukan Username Or Email "
                        prepend-icon="mdi-account-circle"
                        autocomplete="off"
                      />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-text-field
                        v-model="password"
                        label="Masukan Password"
                        placeholder="Masukan Password"
                        prepend-icon="mdi-lock"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        autocomplete="off"
                        @click:append="see"
                      />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-checkbox label="Remember Me" />
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn
                        text
                        color="red"
                      >
                        Forgot Password ?
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item class="d-flex justify-end">
                    <v-list-item-action>
                      <div>
                        <v-btn
                          color="green"
                          @click="addusername"
                        >
                          Login
                        </v-btn>
                      </div>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Login',
    data: () => ({
      img: require('@/assets/register_bg_2.png'),
      showPassword: false,
      username: '',
      password: '',
    }),
    computed: {
      ...mapGetters('a', ['count']),
    },
    created () {
      this.$vuetify.theme.dark = true
    },
    methods: {
      see () {
        this.showPassword = !this.showPassword
      },
      addusername () {
        this.$store.dispatch({
          type: 'a/addUsername',
          name: this.username,
        })
        this.$router.push({ path: '/' })
        this.$toast.open({
          message: 'Suksess Login!',
          type: 'success',
          position: 'top - right',
        })
      },
    },
  }
</script>

<style></style>
