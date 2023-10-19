export default {
  methods: {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
      return $http.post('users', payload);
    },
    updateUser(userId, payload) {
      return $http.put(`users/${userId}`, payload);
    },
      return $http.delete(`users/${userId}`);
    },
    changePassword(userId, payload) {
      return $http.post(`users/${userId}/change-password`, payload);
    },
  },
