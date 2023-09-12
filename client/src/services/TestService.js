export default {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
