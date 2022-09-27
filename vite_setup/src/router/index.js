import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/pageApi.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/route',
    component: () => import('../views/route.vue'),
    meta: {
      title: '首页1'
    }
  },
  {
    path: '/hover',
    component: () => import('../views/hover.vue'),
    meta: {
      title: '首页1'
    }
  },
  {
    path: '/zjtx',
    component: () => import('../views/zjtx/index.vue'),
    meta: {
      title: '首页1'
    }
  }
];

const router = createRouter({
  //哈希路由
  history: createWebHashHistory(),
  // history路由
  // history: createWebHistory(),
  routes
});
export default router;
