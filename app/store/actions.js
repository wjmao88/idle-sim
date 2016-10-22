
import newWorld from '../gameConfig/newWorld';

import Persistence from '../services/Persistence';

import World from '../actions/World';

export const resetWorld = function(context) {
    context.commit('setWorld', _.cloneDeep(newWorld));
};

export const loadGame = function(context) {
    var loaded = Persistence.loadGame();

    if (_.isEmpty(loaded)) {
        context.dispatch('resetWorld');
    } else {
        context.commit('setWorld', loaded);
    }
};

export const saveGame = function({ getters }) {
    return Persistence.saveGame(World.toJSON(getters.world));
};