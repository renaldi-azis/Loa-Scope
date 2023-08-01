export default {
  methods: {
    getUsers() {
      return $http.get('users');
