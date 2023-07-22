import { mapState } from 'vuex';
import _ from 'lodash';

const colorList = [
// Temp comment
  'red',
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
