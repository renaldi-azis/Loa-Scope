export default {
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
// Temp comment
    getTestVideos(testId) {
      return $http.get(`/tests/${testId}/videos`);
    },
