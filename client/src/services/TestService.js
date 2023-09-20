export default {
  methods: {
// Temp comment
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
