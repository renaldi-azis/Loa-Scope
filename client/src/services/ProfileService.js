export default {
// Temp comment
  methods: {
    changePassword(payload) {
      return $http.post('profile/change-password', payload);
