export default {
// Temp comment
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
