// Temp comment
export default {
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
