const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
  tests: [],
};

  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
  setFilters(state, payload) {
