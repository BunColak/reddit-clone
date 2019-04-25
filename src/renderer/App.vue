<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'reddit-bcolak',
};
</script>

<style>
/* CSS */
@import url('/node_modules/normalize.css/normalize.css');
@import url('/node_modules/bootstrap/dist/css/bootstrap-grid.min.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&subset=latin-ext');
@import url('./assets/fonts/fonts.css');

body {
    background: #f2f3f5;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
