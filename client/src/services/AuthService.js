export default {
    login(payload) {
      return $http.post('auth/login', payload);
