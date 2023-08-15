export default {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
      return $http.post('users', payload);
    },
