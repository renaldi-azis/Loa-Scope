export default {
  methods: {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
      return $http.post('users', payload);
    },
      return $http.put(`users/${userId}`, payload);
    },
    deleteUser(userId) {
