export default {
  methods: {
    searchTests(payload) {
      return $http.post('/tests/search', payload);
    },
    getTestVideos(testId) {
      return $http.get(`/tests/${testId}/videos`);
    },
  },
