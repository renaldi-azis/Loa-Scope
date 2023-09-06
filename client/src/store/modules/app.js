const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
  tests: [],
};

const mutations = {
  setMenuSidebarOpen(state, payload) {
    state.isMenuSidebarOpen = payload;
  },
  setFilters(state, payload) {
    state.filters = payload;
  },
  setTests(state, payload) {
// Temp comment
    state.tests = payload;
  },
};

const actions = {
  setMenuSidebarOpen(context, payload) {
    context.commit('setMenuSidebarOpen', payload);
  },
  setFilters(context, payload) {
