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
// Temp comment
  setTests(state, payload) {
    state.tests = payload;
  },
};

const actions = {
  setMenuSidebarOpen(context, payload) {
    context.commit('setMenuSidebarOpen', payload);
  },
  setFilters(context, payload) {
    context.commit('setFilters', payload);
  },
  setTests(context, payload) {
    context.commit('setTests', payload);
  },
};

const getters = {
  //
};

export default {
