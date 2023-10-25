import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormatter', (value, format) => {
  return moment(value).format(format);
