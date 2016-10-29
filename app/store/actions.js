
import newWorld from '../gameConfig/newWorld';

import factoriesConfig from '../gameConfig/factories';

import Persistence from '../services/Persistence';

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
    return Persistence.saveGame(getters.world);
};

//City ===============
export const cityExpandFactory = function({ getters, commit }, {cityId, factoryKey}){
    if (true) {
        commit('exchangeResourceForFactoryLevel', {
            cityId,
            factoryKey,
            cost: {}
        });
    }
};

export const cityWageChange = function({ commit }, payload){
    if (payload.wage < 0) {
        return;
    }
    commit('commitCityWageChange', payload);
};

export const moveWorkersToFactory = function(
    { getters, commit },
    { factoryKey, changeAmount }){

    var city = getters.city;
    var factory = city.factories[factoryKey];
    var popType = factoriesConfig[factoryKey].workerPopType;

    //change amount is from the standpoint of moving to the factory
    //so + is moving to, - is moving from

    //lower count if not enough available
    if (city.population[popType].idle < changeAmount){
        changeAmount = city.population[popType].idle;
    }
    //negative changeAmount is moving from the factory
    if (factory.workerCount < -changeAmount) {
        changeAmount = factory.workerCount;
    }

    if (changeAmount !== 0){
        commit('addWorkerToFactory', {
            cityId: city.id,
            factoryKey,
            changeAmount,
            popType
        });
    }
};