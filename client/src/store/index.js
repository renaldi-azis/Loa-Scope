import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import authStore from './modules/auth';

Vue.use(Vuex);

const state = {
  //
};

const mutations = {
  //
};

const actions = {
  //
};

const getters = {
  //
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    appStore,
    authStore,
  },
  plugins: [
    createPersistedState(),
