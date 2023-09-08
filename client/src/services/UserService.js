export default {
  methods: {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
// Temp comment
      return $http.post('users', payload);
    },
    updateUser(userId, payload) {
      return $http.put(`users/${userId}`, payload);
    },
