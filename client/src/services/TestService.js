export default {
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
// Temp comment
      return $http.get(`/tests/${testId}/videos`);
    },
