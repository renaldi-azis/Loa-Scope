import moment from 'moment';

Vue.filter('dateFormatter', (value, format) => {
  if (!value) return '';
