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
  return next();
