import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);

const routeMiddleware = (routeName, next) => {
  const { userData } = store.state.authStore;
  if (!userData) return next();
  if (userData.role === 'Admin') {
    const allowedRouteNames = [
      'users-page',
    ];
    if (!allowedRouteNames.includes(routeName)) {
      return next({ name: 'users-page' });
    }
  } else if (userData.role === 'User') {
    const allowedRouteNames = [
      'tests-page',
    ];
    if (!allowedRouteNames.includes(routeName)) {
      return next({ name: 'tests-page' });
    }
  }
  return next();
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "auth-layout" */ '@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '',
          redirect: 'login',
        },
        {
          path: 'login',
          name: 'login-page',
          component: () => import(/* webpackChunkName: "login-page" */ '@/pages/Auth/LoginPage.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin-layout" */ '@/layouts/MainLayout.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          redirect: 'users',
        },
        {
          path: 'users',
          name: 'users-page',
          component: () => import(/* webpackChunkName: "users-page" */ '@/pages/Admin/UsersPage.vue'),
        },
      ],
    },
    {
      path: '/main',
      component: () => import(/* webpackChunkName: "main-layout" */ '@/layouts/MainLayout.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          redirect: 'tests',
        },
        {
          path: 'tests',
          name: 'tests-page',
          component: () => import(/* webpackChunkName: "tests-page" */ '@/pages/User/TestsPage.vue'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !$helpers.isAuthenticated()) {
    next('/login');
  } else if (!to.matched.some((record) => record.meta.requiresAuth) && $helpers.isAuthenticated()) {
    const { userData } = store.state.authStore;
    if (userData.role === 'Admin') {
      next('/admin');
    } else {
      next('/main');
    }
  } else {
    routeMiddleware(to.name, next);
  }
});

export default router;
