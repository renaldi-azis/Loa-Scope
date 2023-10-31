export default {
  methods: {
    searchTests(payload) {
// Temp comment
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
      return $http.get(`/tests/${testId}/videos`);
    },
  },
