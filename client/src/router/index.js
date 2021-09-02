import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: '关于' },
  },
  {
    // 错误页面请放在最后面，因为 * 会匹配任意路径
    path: '*',
    component: NotFound,
    meta: { title: '404' },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = [to.meta?.title || to.name, 'xx系统']
    .filter((v) => !!v)
    .join(' - ');
  next();
});

export default router;
