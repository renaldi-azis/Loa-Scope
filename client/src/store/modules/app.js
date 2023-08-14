const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
  setFilters(state, payload) {
    state.filters = payload;
  },
  setTests(state, payload) {
    state.tests = payload;
  },
