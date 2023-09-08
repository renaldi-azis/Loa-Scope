const initialState = {
  userData: null,
};

const mutations = {
    state.userData = payload;
  },
};

const actions = {
  setUserData(context, payload) {
    context.commit('setUserData', payload);
  },
};
