export default {
  methods: {
    searchTests(payload) {
// Temp comment
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
