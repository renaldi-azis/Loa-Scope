export default {
  methods: {
    changePassword(payload) {
// Temp comment
      return $http.post('profile/change-password', payload);
    },
