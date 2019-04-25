<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'reddit-bcolak',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
/* CSS */
@import url('/node_modules/normalize.css/normalize.css');
@import url('/node_modules/bootstrap/dist/css/bootstrap-grid.min.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&subset=latin-ext');
@import url('./assets/fonts/fonts.css');

body {
    background: #f2f3f5;
    font-family: 'Source Sans Pro', sans-serif;

    a {
      text-decoration: none;
    }
}
</style>
