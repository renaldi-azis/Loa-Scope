export default {
    changePassword(payload) {
      return $http.post('profile/change-password', payload);
    },
