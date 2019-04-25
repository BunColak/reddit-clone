<template>
  <div class="comment">
    <p class="author">{{ comment.data.author }}</p>
    <div>{{ comment.data.body }}</div>
    <div class="replies" v-if="replies">
      <comment v-for="reply in replies" :key="reply.id" :comment="reply"></comment>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comment: Object
  },
  computed: {
    replies() {
      let replies = [];
      if(this.comment.data.replies) {
        this.comment.data.replies.data.children.forEach(reply => {
          reply.kind !== "more" && replies.push(reply);
        });
      }
      return replies;
    }
  }
};
</script>

<style lang="scss">
.comment {
  padding: 8px;
  background: white;
  margin: 4px 0;
  border-left: inset 1px lighten($color: #000000, $amount: 60);

  .comments > & {
    border-left: none;
  }

  .author {
    font-size: 0.9em;
    color: lighten($color: #000000, $amount: 60);
    margin: 4px 0;
  }
}
</style>
