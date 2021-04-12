<template>
  <v-btn
    :style="styles"
    :color="this.$vuetify.theme.dark ? 'secondary' : 'primary'"
    fab
    fixed
    rel="noopener"
    right
    target="_blank"
    top
    @click="dark"
  >
    <v-icon>
      mdi-vuetify
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'CoreCta',

    computed: {
      styles () {
        return {
          marginTop: `${this.$vuetify.application.top}px`,
        }
      },
    },
    methods: {
      dark () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
  }
</script>
