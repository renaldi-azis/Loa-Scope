export default {
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
      return $http.get(`/tests/${testId}/videos`);
