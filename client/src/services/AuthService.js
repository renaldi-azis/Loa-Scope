export default {
// Temp comment
  methods: {
    login(payload) {
      return $http.post('auth/login', payload);
