<template>
  <div class="comment">
    <div class="ups">
      <i class="material-icons">
        keyboard_arrow_up
      </i>
      <i class="material-icons">
        keyboard_arrow_down
      </i>
      <div v-if="replies" class="collapse"></div>
    </div>
    <span class="author">{{ comment.data.author }}</span>
    <div v-html="commentBody"></div>
    <div class="replies" v-if="replies">
      <comment v-for="reply in replies" :key="reply.id" :comment="reply"></comment>
    </div>
  </div>
</template>

<script>
import { decodeHTML } from '@/utils/string';
export default {
  name: 'comment',
  props: {
    comment: Object
  },
  computed: {
    replies() {
      let replies = [];
      if (this.comment.data.replies) {
        this.comment.data.replies.data.children.forEach(reply => {
          reply.kind !== 'more' && replies.push(reply);
        });
      }
      return replies.length ? replies : '';
    },
    commentBody() {
      if (this.comment.data.body_html) {
        return decodeHTML(this.comment.data.body_html);
      }
      return '';
    }
  }
};
</script>

<style lang="scss">
.comment {
  padding: 8px 16px 8px 48px;
  background: white;
  position: relative;

  .ups {
    position: absolute;
    left: 16px;
    top: 8px;
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      color: lighten($color: #000000, $amount: 60);

      &:hover {
        cursor: pointer;
        color: lighten($color: #000000, $amount: 30);
        font-weight: bold;
      }
    }

    .collapse {
      width: 1px;
      background: lighten($color: #000000, $amount: 80);
      height: 100%;

      &:hover {
        background: lighten($color: #000000, $amount: 30);
        cursor: pointer;
      }
    }
  }

  p {
    margin: 8px 0;
  }

  .comments > & {
    margin: 8px 0;
    border-left: none;
  }

  .author {
    font-size: 0.9em;
    color: lighten($color: #000000, $amount: 60);
    margin: 4px 0;
  }
}
</style>
