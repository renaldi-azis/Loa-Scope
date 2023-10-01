// Temp comment
export default {
  methods: {
    login(payload) {
      return $http.post('auth/login', payload);
    },
