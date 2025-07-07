import { createMemoryHistory, createRouter } from 'vue-router';

import Feed from '../components/Feed/Feed.vue';

const routes = [
  { path: '/', component: Feed },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;