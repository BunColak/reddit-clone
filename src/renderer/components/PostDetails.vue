<template>
  <div class="post-details">
    <h2 v-if="post">{{ post.data.title }}</h2>
    <div class="selftext" v-html="selftext" v-if="selftext"></div>
    <div class="comments">
      <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script>
import { decodeHTML } from '@/utils/string';
import Comment from '@/components/Comment'
export default {
  name: 'post-details',
  components: {
    Comment
  },
  props: {
    postAndComments: Array
  },
  computed: {
    post() {
      if (this.postAndComments[0]) {
        return this.postAndComments[0].data.children[0];
      }
      return '';
    },
    comments() {
      if (this.postAndComments[1]) {
        return this.postAndComments[1].data.children;
      }
      return '';
    },
    selftext() {
      if (this.post.data) {
        return this.post.data.selftext_html ? decodeHTML(this.post.data.selftext_html) : '';
      }
      return '';
    }
  }
};
</script>

<style lang="scss">
.post-details {
  display: flex;
  flex-direction: column;

  h2 {
    background: white;
    padding: 16px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .selftext {
    background: white;
    padding: 16px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .comments {
    margin-top: 16px;
  }
}
</style>

