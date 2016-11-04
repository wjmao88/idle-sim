
export const cityExpandFactory = function(
  { getters, commit, dispatch },
  { factoryKey }
  ) {
  if (true) {
    const cityId = getters.currentCity.id;

    commit('exchangeResourceForFactoryLevel', {
      cityId,
      factoryKey,
      cost: {}
    });

    dispatch('saveGame');
  }
};

export const moveWorkersToFactory = function(
  { getters, commit, dispatch },
  { factoryKey, changeAmount }
  ) {

  const cityId = getters.currentCity.id;
  const factory = getters.cityFactories[factoryKey];
  const popType = getters.factoriesConfig[factoryKey].workerPopType;

  //change amount is from the standpoint of moving to the factory
  //so + is moving to, - is moving from

  changeAmount = Math.min(changeAmount, getters.cityPopulation[popType].idle);

  changeAmount = Math.max(changeAmount, -factory.workerCount);

  if (changeAmount !== 0){
    commit('addWorkerToFactory', {
      cityId,
      factoryKey,
      changeAmount,
      popType
    });

    dispatch('saveGame');
  }
};