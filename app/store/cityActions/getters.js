import _ from 'lodash';
import * as resourceMath from '../../utils/resourceMath';

import popConfigs from '../../gameConfig/popTypes';

export const currentCity = (state, getters, rootState) => {
  return getters.params.cityId &&
    rootState.world.cities[getters.params.cityId];
};

export const cityPopulationInfo = (state, getters) => {
  return _.map(getters.currentCity.population, (instance, key) => {
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

export const cityFactories = (state, getters) => {
  return _.map(getters.currentCity.factories, (instance, key) => {
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
