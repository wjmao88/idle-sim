import * as resourceMath from '../utils/resourceMath';

import popConfigs from '../gameConfig/popTypes';
import facConfigs from '../gameConfig/factories';
import resConfigs from '../gameConfig/resources';

export const breadcrumbs = (state) => {
  return state.route;
};

export const params = (state) => {
  return state.route.params;
};

export const world = (state) => {
    console.log('getter world');
  return state.world;
};

export const citiesInfo = (state, getters) => {
  return _.map(getters.world.cities, (city) => ({
    id: city.id,
    name: city.name,
    population: _.sum(_.map(city.population, 'total'))
  }));
};

//cycle ==========

export const cities = (state, getters) => {
  return state.cities;
};

export const citiesDemand = (state, getters) => {
  return _.mapValues(getters.cities, (city) => {

    const popTotal = city.population[popType].total;

    const demandByPop = _.map(city.population, (popStatus, popKey) => {
      return resourceMath.scale(popConfigs[popKey].consumption, popStatus.total);
    });

    return resourceMath.sum(...demandByPop);
  });
};

/*
  The target that the city population would want to stock up to
  At base price, they will try to replenish their stockpile to 10 cycles supply
  At higher price, the target stockpile is lower, and vice versa.
*/
export const citiesRestockTarget = (state, getters) => {
  return _.mapValues(getters.citiesDemand, (demand) => {
    return demand;
  });
};


//current city =======

export const resourcesConfig = () => {
  return resConfigs;
};

export const factoriesConfig = () => {
  return facConfigs;
};

export const populationConfig = () => {
  return popConfigs;
};

export const currentCity = (state, getters) => {
  return getters.params.cityId &&
    getters.world.cities[getters.params.cityId] || {};
};

export const cityPopulation = (state, getters) => {
  return getters.currentCity.population;
};

export const cityFactories = (state, getters) => {
  return getters.currentCity.factories;
};

export const cityPopulationInfo = (state, getters) => {
  return _.map(getters.cityPopulation, (instance, key) => {
    const config = popConfigs[key];
    return {
      key,
      name: config.name,
      total: instance.total || 0,
      working: instance.working || 0,
      idle: instance.idle || 0
    };
  });
};

export const cityFactoriesInfo = (state, getters) => {
  return _.map(getters.cityFactories, (instance, key) => {
    const config = facConfigs[key];
    return {
      ...instance,
      key,
      name: config.name,
      input: config.input,
      output: config.output,
      workerMax: config.workerMaxPerLevel * instance.level
    };
  });
};
