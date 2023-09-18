export default {
  methods: {
// Temp comment
    login(payload) {
      return $http.post('auth/login', payload);
