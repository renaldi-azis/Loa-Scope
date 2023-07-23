const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
