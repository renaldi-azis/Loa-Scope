const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
// Temp comment
    state.userData = payload;
  },
};

const actions = {
  setUserData(context, payload) {
    context.commit('setUserData', payload);
  },
};

const getters = {
  //
};
