const initialState = {
  isMenuSidebarOpen: null,
  filters: null,
  tests: [],
};

const mutations = {
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
  setFilters(context, payload) {
    context.commit('setFilters', payload);
  },
