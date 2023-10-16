import Vue from 'vue';
import moment from 'moment';

  if (!value) return '';
  return moment(value).format(format);
