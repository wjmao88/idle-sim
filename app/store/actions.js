import _ from 'lodash';

import newWorld from '../gameConfig/newWorld';
import Persistence from '../services/Persistence';

import * as resourceMath from '../utils/resourceMath';

import popConfigs from '../gameConfig/popTypes';
import facConfigs from '../gameConfig/factories';
import resConfigs from '../gameConfig/resources';

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
  dispatch('cycleCities');

  dispatch('saveGame');
};

//cycles =========
const facConfigsOrdered = _.orderBy(facConfigs, 'priority', 'desc');

export const cycleCities = function(
  { commit, dispatch, getters }
  ) {
  const citiesDemand = getters.citiesDemand;
  const citiesRestockTarget = getters.citiesRestockTarget;

  _.each(getters.world.cities, (city, cityId) => {

    commit('updateCityForCycle', { cityId });

    commit('cityBuyResources', {
      cityId,
      target: citiesRestockTarget[cityId]
    });

    commit('cityConsumeResources', {
      cityId,
      demand: citiesDemand[cityId]
    });

    _.each(facConfigsOrdered, (facConfig, facKey) => {
      commit('cityFactoryProduction', {
        cityId,
        facKey,
        facConfig
      });
    });

    //this is the last step because it should not affect production
    commit('cityPopulationMigrate', {
      cityId,
      demand: citiesDemand[cityId],
    });
  });
};

//current city ============
export const cityExpandFactory = function(
  { getters, commit },
  { factoryKey }
  ) {
  if (true) {
    const cityId = getters.currentCity.id;

    commit('exchangeResourceForFactoryLevel', {
      cityId,
      factoryKey,
      cost: {}
    });
  }
};

export const moveWorkersToFactory = function(
  { getters, commit },
  { factoryKey, changeAmount }
  ) {

  const cityId = getters.currentCity.id;
  const factory = getters.cityFactories[factoryKey];
  const popType = facConfigs[factoryKey].workerPopType;

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
  }
};