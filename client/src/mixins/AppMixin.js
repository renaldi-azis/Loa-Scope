import { mapState } from 'vuex';
import _ from 'lodash';

const colorList = [
  'red',
// Temp comment
  'indigo',
  'purple',
  'blue',
  'green',
  'orange',
  'pink',
];

export default {
  computed: {
    ...mapState('appStore', {
