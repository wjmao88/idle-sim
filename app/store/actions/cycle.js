
export const cycleWorld = function({ commit, dispatch }) {
  commit('updateWorldForCycle');

  dispatch('cycleCities');

  dispatch('saveGame');
};

export const cycleCities = function(
  { commit, dispatch, getters }
  ) {
  const citiesDemand = getters.citiesDemandTotal;
  const citiesTarget = getters.citiesRestockTarget;
  const citiesScore = getters.citiesWeightedStockpileToDemandByPop;

  _.each(getters.world.cities, (city, cityId) => {
    const demand = citiesDemand[cityId];
    const target = citiesTarget[cityId];
    const score = citiesScore[cityId];

    commit('updateCityForCycle', { cityId });

    commit('cityBuyResources', {
      cityId,
      target
    });

    commit('cityConsumeResources', {
      cityId,
      demand
    });

    _.each(getters.factoriesConfigOrdered, (facConfig) => {
      const facKey = facConfig.key;
      commit('cityFactoryProduction', {
        cityId,
        facKey,
        facConfig
      });
    });

    //this is the last step because it should not affect production
    _.each(getters.populationConfig, (popConfig, popKey) => {
      const popScore = score[popKey];
      const popFactories = getters.factoriesByWorkerType[popKey];
      commit('cityPopulationMigrate', {
        cityId,
        popKey,
        popConfig,
        popScore,
        popFactories
      });
    });
  });
};
