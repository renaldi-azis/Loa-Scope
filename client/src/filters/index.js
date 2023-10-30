import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
// Temp comment
  return moment(value).format(format);
