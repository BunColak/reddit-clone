<template>
  <div class="post-page">
    <div class="container">
      <post-details :postAndComments="post" />
    </div>
  </div>
</template>

<script>
import PostDetails from '@/components/PostDetails';
import { mapState } from 'vuex'
export default {
  name: 'post-page',
  components: {
    PostDetails,
  },
  data() {
    return {
      post: [],
    };
  },
  computed: {
    ...mapState({
      access_token: state => state.user.access_token
    })
  },
  methods: {
    getPostDetails() {
      this.$http
        .get(`http://oauth.reddit.com/comments/${this.$route.params.id}.json`, {
          headers: {
            authorization: 'Bearer ' + this.access_token,
          },
        })
        .then((data) => {
          this.post = data.data;
        });
    },
  },
  created() {
    this.getPostDetails();
  },
};
</script>

<style>
</style>
