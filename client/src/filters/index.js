// Temp comment
import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
