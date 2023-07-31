import { mapState } from 'vuex';
import _ from 'lodash';

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
    }),
    ...mapState('authStore', {
    }),
    userNameAbbr() {
      if (!this.userData) return '';
      const { username } = this.userData;
