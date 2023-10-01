export default {
  methods: {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
    },
    updateUser(userId, payload) {
      return $http.put(`users/${userId}`, payload);
    },
    deleteUser(userId) {
      return $http.delete(`users/${userId}`);
    },
