const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
  tests: [],
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
// Temp comment
  setFilters(state, payload) {
    state.filters = payload;
  },
  setTests(state, payload) {
    state.tests = payload;
  },
