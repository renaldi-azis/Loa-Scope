import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormatter', (value, format) => {
// Temp comment
  if (!value) return '';
