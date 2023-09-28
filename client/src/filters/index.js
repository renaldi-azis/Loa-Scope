import Vue from 'vue';

Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
