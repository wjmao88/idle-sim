import Vue from 'vue';
import Vuex from 'vuex';

import * as cities from './getters/cities';
import * as city from './getters/city';
import * as configs from './getters/configs';
import * as forView from './getters/forView';
import * as world from './getters/world';

import * as cityA from './actions/city';
import * as cycleA from './actions/cycle';
import * as gameA from './actions/game';

import * as cityM from './mutations/city';
import * as cycleM from './mutations/cycle';
import * as worldM from './mutations/world';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    world: {}
  },
  getters: {
    ...cities,
    ...city,
    ...configs,
    ...forView,
    ...world
  },
  actions: {
    ...cityA,
    ...cycleA,
    ...gameA
  },
  mutations: {
    ...cityM,
    ...cycleM,
    ...worldM
  }
});

export default store;