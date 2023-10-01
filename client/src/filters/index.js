import Vue from 'vue';
import moment from 'moment';

// Temp comment
Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
