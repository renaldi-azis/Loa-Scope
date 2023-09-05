const initialState = {
  userData: null,
};

const mutations = {
  setUserData(state, payload) {
  },
};

const actions = {
  setUserData(context, payload) {
    context.commit('setUserData', payload);
  },
};
