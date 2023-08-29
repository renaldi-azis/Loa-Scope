const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
    state.userData = payload;
  },
};

  setUserData(context, payload) {
    context.commit('setUserData', payload);
