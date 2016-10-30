import _ from 'lodash';

import * as resourceMath from '../../utils/resourceMath';

import popConfigs from '../../gameConfig/popTypes';

export const cities = (state, getters, rootState) => {
  return rootState.cities;
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