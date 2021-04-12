<template>
  <div>
    <button @click="$router.replace('/page')">
      Edit Post
    </button>
    <div
      ref="contentContainer"
      class="content-view"
      disabled
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Quill from 'quill'
  import 'quill/dist/quill.snow.css'

  export default {
    data: () => ({
      content: '',
    }),
    computed: {
      ...mapGetters(['delta']),
    },
    mounted () {
      const article = document.createElement('article')
      const quill = new Quill(article, {})
      quill.setContents(this.delta)
      setTimeout(() => {
        this.$refs.contentContainer.appendChild(article)
      }, 0)
    },
  }
</script>

<style></style>
