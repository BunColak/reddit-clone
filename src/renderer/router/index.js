import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/layout/Home').default,
    },
    {
      path: '/post/:id',
      name: 'post-page',
      component: require('@/layout/Post').default,
    },
    {
      path: '/subreddit/:subreddit',
      name: 'subreddit-page',
      component: require('@/layout/Subreddit').default,
    },
  ],
});
