import _ from 'lodash';

import newWorld from '../gameConfig/newWorld';

import factoriesConfig from '../gameConfig/factories';

import Persistence from '../services/Persistence';

export const resetWorld = function({ commit, dispatch }) {
    commit('setWorld', _.cloneDeep(newWorld));
    dispatch('saveGame');
};

export const loadGame = function({ commit, dispatch }) {
    var loaded = Persistence.loadGame();

    if (_.isEmpty(loaded)) {
        dispatch('resetWorld');
    } else {
        commit('setWorld', loaded);
    }
};

export const saveGame = function({ getters }) {
    return Persistence.saveGame(getters.world);
};

export const cycleWorld = function({ commit, dispatch }) {
    commit('updateWorldForCycle');

    dispatch('saveGame');
};
