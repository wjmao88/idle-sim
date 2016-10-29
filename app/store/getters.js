import {map} from 'lodash';
import facTypesConfig from '../gameConfig/factories';
import popTypesConfig from '../gameConfig/popTypes';
import resTypesConfig from '../gameConfig/resources';

import {resToArray} from './utils/resourceMap';

export const breadcrumbs = (state) => {
  return state.route;
};

export const params = (state) => {
  return state.route.params;
};

export const world = (state) => {
  return state.world;
};

export const citiesInfo = (state, getters) => {
  return _.map(getters.world.cities, city => {
    return {
      id: city.id,
      name: city.name,
      population: _.reduce(city.population,
        (total, pop) => total + pop.total, 0 )
    };
  });
};

export const city = (state, getters) => {
  return getters.params.cityId &&
    getters.world.cities[getters.params.cityId] ||
    {};
};

export const cityPopulation = (state, getters) => {
  var city = getters.city || {};

  return _.map(city.population, (instance, key) => {
    var config = popTypesConfig[key];
    return {
      key: key,
      name: config.name,
      cityId: city.id,
      total: instance.total || 0,
      working: instance.working || 0,
      idle: instance.idle || 0,
      wage: instance.wage || 0,
      happiness: Math.round(instance.happiness * 100)/100 || 0
    };
  });
};

export const cityWarehouse = (state, getters) => {
  return _.map(getters.city.warehouse, (amount, key) => {
    return {
      name: resTypesConfig[key].name,
      amount: amount
    };
  });
};

export const cityFactories = (state, getters) => {
  var city = getters.city || {};
  return _.map(getters.city.factories, (instance, key) => {
    const config = facTypesConfig[key];
    return {
      ...instance,
      key,
      name: config.name,
      cityId: city.id,
      input: resToArray(config.input),
      output: resToArray(config.output),
      workerMax: config.workerMaxPerLevel * instance.level
    };
  });
};