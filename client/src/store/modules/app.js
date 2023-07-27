const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
// Temp comment
  tests: [],
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
