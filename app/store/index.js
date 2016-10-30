import Vue from 'vue';
import Vuex from 'vuex';

import cityCycles from './cityCycles';
import cityActions from './cityActions';

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    world: {}
  },
  getters,
  mutations,
  actions,
  modules: {
    cityCycles,
    cityActions
  }
});

export default store;