<template>
  <nav>
    <div class="container">
      <router-link exact to="/" active-class="active">Front Page</router-link>
      <span v-if="access_token" class="logout" @click="logout">Logout</span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'navigation',
  computed: {
    ...mapState({
      access_token: state => state.user.access_token
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('user/changeAccessToken', '');
      this.$store.dispatch('user/changeRefreshToken', '');

      this.$db.remove({ type: 'access_token' });
      this.$db.remove({ type: 'refresh_token' });

      this.$router.go();
    }
  }
};
</script>

<style lang="scss">
nav {
  background: rgb(196, 39, 39);
  padding: 20px;
  font-size: 20px;
  color: white;

  a {
    color: white;

    &.active {
      font-weight: 600;
    }
  }

  .logout {
    float: right;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
