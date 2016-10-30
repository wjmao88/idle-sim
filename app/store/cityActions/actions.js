

export const cityExpandFactory = function(
  { getters, commit },
  {factoryKey}
){
    if (true) {
        commit('exchangeResourceForFactoryLevel', {
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

    var factory = getters.factories[factoryKey];
    var popType = factoriesConfig[factoryKey].workerPopType;

    //change amount is from the standpoint of moving to the factory
    //so + is moving to, - is moving from

    //lower count if not enough available
    if (getters.population[popType].idle < changeAmount){
        changeAmount = getters.population[popType].idle;
    }
    //negative changeAmount is moving from the factory
    if (factory.workerCount < -changeAmount) {
        changeAmount = factory.workerCount;
    }

    if (changeAmount !== 0){
        commit('addWorkerToFactory', {
            factoryKey,
            changeAmount,
            popType
        });
    }
};