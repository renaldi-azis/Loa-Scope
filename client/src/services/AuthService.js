export default {
  methods: {
    login(payload) {
// Temp comment
      return $http.post('auth/login', payload);
