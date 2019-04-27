<template>
  <div class="subreddit">
    <div class="container">
      <post-list :posts="posts" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostList from '@/components/PostList';
export default {
  name: 'subreddit-page',
  components: {
    PostList
  },
  data() {
    return {
      posts: []
    };
  },
  computed: {
    ...mapState({
      access_token: state => state.user.access_token,
      refresh_token: state => state.user.refresh_token
    })
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$http
        .get('https://oauth.reddit.com/r/' + this.$route.params.subreddit + '.json', {
          headers: {
            authorization: 'Bearer ' + this.access_token
          }
        })
        .then(request => {
          this.posts = request.data.data.children;
        })
        .catch(() => {
          this.$store.dispatch('user/refreshAccessToken').then(() => {
            this.getPosts();
          });
        });
    }
  }
};
</script>

<style>
</style>
