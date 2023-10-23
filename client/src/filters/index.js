import Vue from 'vue';

Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
  return moment(value).format(format);
