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
      userData: (state) => state.userData,
    }),
    userNameAbbr() {
      if (!this.userData) return '';
      const { username } = this.userData;
      return username[0].toUpperCase();
    },
    userRole() {
      return this.userData.role;
    },
    isAdmin() {
      return this.userRole === 'Admin';
    },
    isUser() {
      return this.userRole === 'User';
    },
  },
  methods: {
    getValidators(fieldLabel, rules) {
      return rules.map((rule) => {
        if (rule === 'required') {
          return (v) => !!v || `${fieldLabel} is required`;
