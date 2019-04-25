<template>
<li>
  <div class="ups">
    <i class="material-icons">
      keyboard_arrow_up
    </i>
    <span>{{ ups }}</span>
    <i class="material-icons">
      keyboard_arrow_down
    </i>
  </div>
  <div class="info">
    <div class="title">
      <router-link :to="postLink">
        {{ post.data.title }}
      </router-link>
      <span class="subreddit">
        {{ post.data.subreddit_name_prefixed }}
      </span>
    </div>
    <div class="actions">
      <router-link :to="postLink" class="material-icons">forum</router-link>
      <span>by {{ post.data.author }}</span>
    </div>
  </div>
</li>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: Object
  },
  computed: {
    ups() {
      if (this.post.data.ups > 1200) {
        return `${parseFloat(this.post.data.ups / 1000).toFixed(1)}k`;
      }
      return this.post.data.ups;
    },
    postLink() {
      return `/post/${this.post.data.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  padding: 16px 16px 16px 66px;
  background: white;
  border-bottom: 1px solid lighten($color: #000000, $amount: 90);
  min-height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .ups {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

    i {
      font-size: 32px;
      color: lighten($color: black, $amount: 60);

      &:hover {
        cursor: pointer;
        color: lighten($color: black, $amount: 10);
      }
    }
  }

  .info {
    .title {
      a {
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        color: lighten($color: black, $amount: 20);

        &:hover {
          color: black;
        }
      }

      .subreddit {
        color: lighten($color: black, $amount: 40);
      }
    }

    .actions {
      margin-top: 5px;

      a {
        color: lighten($color: black, $amount: 40);
        vertical-align: middle;
        text-decoration: none;

        &:hover {
          cursor: pointer;
          color: lighten($color: black, $amount: 30);
        }
      }
    }
  }
}
</style>

