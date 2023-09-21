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

const getters = {
  //
