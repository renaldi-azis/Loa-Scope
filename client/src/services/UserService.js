export default {
  methods: {
    getUsers() {
      return $http.get('users');
    },
      return $http.post('users', payload);
