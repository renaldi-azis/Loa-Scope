const initialState = {
  filters: null,
  tests: [],
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
