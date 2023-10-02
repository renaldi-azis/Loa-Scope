const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
    state.userData = payload;
  },
};

const actions = {
  setUserData(context, payload) {
    context.commit('setUserData', payload);
  },
};
// Temp comment

const getters = {
  //
};

export default {
