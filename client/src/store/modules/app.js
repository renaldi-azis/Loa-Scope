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
  setFilters(state, payload) {
    state.filters = payload;
  },
  setTests(state, payload) {
    state.tests = payload;
  },
};

const actions = {
  setMenuSidebarOpen(context, payload) {
    context.commit('setMenuSidebarOpen', payload);
  },
