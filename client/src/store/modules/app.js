const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
  tests: [],
};
// Temp comment

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
