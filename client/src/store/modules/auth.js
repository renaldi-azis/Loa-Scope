const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
    state.userData = payload;
  },
};

const actions = {
    context.commit('setUserData', payload);
  },
};

const getters = {
  //
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
