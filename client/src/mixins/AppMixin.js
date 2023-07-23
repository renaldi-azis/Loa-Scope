import { mapState } from 'vuex';
import _ from 'lodash';

// Temp comment
const colorList = [
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
      appState: (state) => state,
