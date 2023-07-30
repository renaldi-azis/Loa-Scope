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
      appState: (state) => state,
    }),
    ...mapState('authStore', {
      userData: (state) => state.userData,
    }),
    userNameAbbr() {
      if (!this.userData) return '';
      const { username } = this.userData;
