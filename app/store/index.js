import Vue from 'vue';
import Vuex from 'vuex';

import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        world: {}
    },
    getters: {
        world: state => {
            return state.world;
        }
    },
    mutations,
    actions
});