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
import { accessToken } from '@/utils/token';
const { BrowserWindow } = require('electron').remote; // eslint-disable-line

export default {
  name: 'home-page',
  components: {
    PostList
  },
  computed: {
    ...mapState({
      access_token: state => state.user.access_token
    })
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.$db.findOne({ type: 'refresh_token' }, (error, doc) => {
      if (doc) {
        this.getRedditFrontpage();
      } else {
        this.loginToReddit();
      }
    });
  },
  methods: {
    getRedditFrontpage() {
      this.$http
        .get('http://oauth.reddit.com/hot.json?limit=50', {
          headers: {
            authorization: this.access_token ? 'Bearer ' + this.access_token : ''
          }
        })
        .then(request => {
          this.posts = request.data.data.children;
        })
        .catch(() => {
          // This would mean access token expired, needs refreshing
          this.$store.dispatch('user/refreshAccessToken').then(() => {
            this.getRedditFrontpage();
          });
        });
    },
    loginToReddit() {
      // Create auth window
      let authWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        show: false,
        'node-integration': false,
        'web-security': false
      });

      const authUrl =
        'https://www.reddit.com/api/v1/authorize?client_id=JKyBiYvIX1CjWQ&response_type=code&state=qazwsx&redirect_uri=http://localhost/reddit_auth&duration=permanent&scope=identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread';

      authWindow.loadURL(authUrl);
      authWindow.show();

      const vue = this;

      authWindow.webContents.on('will-navigate', function(event, newUrl) {
        const url = new URL(newUrl);

        // If user hasn't logged in at all it requires 2 redirects.
        if (url.hostname === 'localhost') {
          const code = url.searchParams.get('code');

          accessToken(code).then(function(codes) {
            vue.$store.dispatch('user/changeAccessToken', codes.access_token);
            vue.$store.dispatch('user/changeRefreshToken', codes.refresh_token);

            authWindow.destroy();
          });
        }
      });

      authWindow.on('closed', function() {
        authWindow = null;
        vue.getRedditFrontpage();
      });
    }
  }
};
</script>

<style>
</style>

