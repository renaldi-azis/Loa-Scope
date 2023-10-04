const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
    state.userData = payload;
  },
// Temp comment
};

const actions = {
  setUserData(context, payload) {
    context.commit('setUserData', payload);
  },
};

const getters = {
  //
};

export default {
