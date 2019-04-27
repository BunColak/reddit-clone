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
        <router-link v-if="post.data.is_self" :to="postLink">
          {{ post.data.title }}
        </router-link>
        <a :href="post.data.url" target="_blank" v-else
          >{{ post.data.title }}
          <span class="domain" v-if="!post.data.is_self"
            >{{ post.data.domain }}<i class="material-icons">open_in_new</i>
          </span>
        </a>
      </div>
      <div class="actions">
        <router-link :to="postLink" class="material-icons discussion">forum</router-link>
        <span>by <strong>{{ post.data.author }}</strong> {{ relativePostTime }} ago to </span>
        <router-link :to="subredditLink" class="subreddit">
          {{ post.data.subreddit_name_prefixed }}
        </router-link>
      </div>
    </div>
  </li>
</template>


<script>
import { distanceInWordsToNow } from 'date-fns'
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
    },
    relativePostTime() {
      return distanceInWordsToNow(this.post.data.created*1000)
    },
    subredditLink() {
      return `/subreddit/${this.post.data.subreddit}`;
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

        .domain {
          display: inline-block;
          background: lighten($color: black, $amount: 85);
          color: lighten($color: black, $amount: 30);
          padding: 2px 4px;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 400;

          &:hover {
            cursor: pointer;
          }

          i {
            display: inline-block;
            position: relative;
            font-size: 16px;
            vertical-align: bottom;
          }
        }
      }
    }

    .actions {
      margin-top: 5px;

      .subreddit {
        color: lighten($color: black, $amount: 40);
      }

      .discussion {
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

