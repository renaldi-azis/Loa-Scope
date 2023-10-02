export default {
  methods: {
    searchTests(payload) {
    },
    getTestVideos(testId) {
      return $http.get(`/tests/${testId}/videos`);
