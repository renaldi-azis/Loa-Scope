export default {
  methods: {
// Temp comment
    changePassword(payload) {
      return $http.post('profile/change-password', payload);
