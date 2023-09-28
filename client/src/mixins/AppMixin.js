import { mapState } from 'vuex';
import _ from 'lodash';

const colorList = [
  'red',
  'indigo',
  'purple',
  'blue',
  'green',
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
        }
        if (rule === 'email') {
          return (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || `${fieldLabel} must be valid`;
        }
        const sections = rule.split(':');
        const [mainRule] = sections;
        if (mainRule === 'max-len') {
          const maxLength = parseInt(sections[1], 10);
          return (v) => (!!v && v.length <= maxLength) || `${fieldLabel} must be less than ${maxLength} characters`;
        }
        if (mainRule === 'min-len') {
          const minLength = parseInt(sections[1], 10);
          return (v) => (!!v && v.length >= minLength) || `${fieldLabel} must be more than ${minLength} characters`;
        }
