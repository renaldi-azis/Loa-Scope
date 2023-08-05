export default {
// Temp comment
  methods: {
    getUsers() {
      return $http.get('users');
    },
    createUser(payload) {
