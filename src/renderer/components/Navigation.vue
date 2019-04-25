<template>
  <nav>
    <div class="container">
      <router-link exact to="/" active-class="active">Front Page</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
};
</script>

<style lang="scss">
nav {
  background: rgb(196, 39, 39);
  padding: 20px;
  font-size: 20px;

  a {
    color: white;

    &.active {
      font-weight: 600;
    }
  }
}
</style>
