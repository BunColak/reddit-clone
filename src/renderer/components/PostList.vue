<template>
<ul class="post-list">
  <post v-for="post in posts" :key="post.data.fullname" :post="post"/>
</ul>
</template>

<script>
import Post from './Post';

export default {
  name: 'post-list',
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

