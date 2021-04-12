/* eslint-disable vue/no-unused-components */
<template>
  <div class="blog-post-creator rteditor">
    <div class="post-inputs">
      <div class="title-input">
        <v-text-field
          v-model="title"
          placeholder="Enter a post title"
          prepend-icon="mdi-message"
        />
      </div>
      <div class="cat-input">
        <v-select
          label="Categroy"
          :items="postCategories"
          item-text="label"
          item-value="id"
        />
      </div>
      <div class="image-input">
        <v-btn
          text
          @click="showPreview"
        >
          See Preview
        </v-btn>
      </div>
      <!-- <div class="image-input">
        <div class="inner-image-input">
          <img
            v-if="image_url"
            :src="image_url"
            width="40px"
            height="40px"
          >
          <button
            type="primary"
            class="flex-center"
            icon="ios-camera-outline"
            @click="showImageModal = true"
          >
            Post Image
          </button>
          <button @click="showPreview">
            See Preview
          </button>
        </div>
      </div> -->
    </div>
    <v-row justify="center">
      <v-col
        cols="12"
        lg="6"
      >
        <quill-editor
          ref="myQuillEditor"
          v-model="content"
          :options="editorOption"
        />
      </v-col>
    </v-row>
    <div class="post-actions-row">
      <button
        class="btn-delete"
        @click="del"
      >
        Delete
      </button>
      <button
        type="primary"
        @click="save"
      >
        Save
      </button>
      <button
        type="primary"
        @click="publish"
      >
        Publish
      </button>
    </div>
  </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import { quillEditor } from 'vue-quill-editor'
  import { Button, Input, Select } from 'iview'
  import { mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Button,
      // eslint-disable-next-line vue/no-unused-components
      Input,
      // eslint-disable-next-line vue/no-unused-components
      Select,
      quillEditor,
    },
    data: () => ({
      title: '',
      category: '',
      image_url: '',
      content: '',
      editorOption: {
        debug: 'info',
        placeholder: 'Type your post...',
        readOnly: true,
        theme: 'snow',
      },
      postCategories: [
        {
          id: 1,
          label: 'NodeJS',
          img:
            'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png?w=200',
        },
        {
          id: 2,
          label: 'JavaScript',
          img: 'https://cdn.auth0.com/blog/js-fatigue/JSLogo.png',
        },
      ],
      showImageModal: false,
      formEntered: false,
      mounting: false,
    }),
    watch: {
      content (val) {
        if (!this.mounting) {
          this.$store.commit(
            'setDelta',
            this.$refs.myQuillEditor.quill.getContents(),
          )
        }
        this.$store.commit('setContent', val)
        this.mounting = false
      },
    },
    methods: {
      showPreview () {
        this.$router.replace('/preview')
      },
      del () {
        // TODO
        this.formEntered = true
      },
      save () {
        // TODO
        this.formEntered = true
      },
      publish () {
        // TODO
        this.formEntered = true
      },
    },
    // eslint-disable-next-line vue/order-in-components
    computed: {
      ...mapGetters(['delta', 'contents']),
    },
    // eslint-disable-next-line vue/order-in-components
    mounted () {
      this.mounting = true
      if (!this.content && this.contents) {
        this.content = this.contents
      }
    },
  }
</script>
<style>
.rteditor {
  margin-left: 20px;
  margin-right: 20px;
}

.cat-input,
.title-input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post-inputs {
  display: grid;
  width: 90%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  padding-bottom: 15px;
  padding-top: 15px;
  /* padding: 20px; */
}

.ql-editor {
  height: 72vh;
  width: 36vh;
}

.inner-image-input {
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-actions-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.ivu-icon-ios-camera-outline {
  font-size: 16px;
}

.btn-delete {
  color: #2d8cf0 !important;
  border: 1px solid #2d8cf0 !important;
}

.btn-delete:hover {
  color: red !important;
  border: 1px solid red !important;
}
</style>
