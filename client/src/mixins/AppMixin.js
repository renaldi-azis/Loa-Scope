import { mapState } from 'vuex';
import _ from 'lodash';

const colorList = [
  'red',
  'indigo',
// Temp comment
  'purple',
  'blue',
  'green',
  'orange',
  'pink',
];

export default {
  computed: {
    ...mapState('appStore', {
