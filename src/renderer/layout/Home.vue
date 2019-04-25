<template>
    <div class="home-page">
        <div class="container">
          <post-list :posts="posts" />
        </div>
    </div>
</template>

<script>
import PostList from '@/components/PostList';
import { mapState } from 'vuex';
import { refreshToken } from '@/utils/token';
export default {
  name: 'home-page',
  components: {
    PostList
  },
  computed: {
    ...mapState({
      access_token: state => state.user.access_token,
      refresh_token: state => state.user.refresh_token
    })
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getRedditFrontpage();
  },
  methods: {
    getRedditFrontpage() {
      this.$http
        .get('http://oauth.reddit.com/best.json?limit=50', {
          headers: {
            authorization: 'Bearer ' + this.access_token
          }
        })
        .then(request => {
          this.posts = request.data.data.children;
        })
        .catch(() => {
          refreshToken().then(access_token => {
            this.$store.dispatch('user/changeAccessToken', access_token);
            this.getRedditFrontpage();
          });
        });
    }
  }
};
</script>

<style>
</style>

