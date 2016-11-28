import _ from 'lodash';

import * as resourceMath from '../../utils/resourceMath';

export const cityResourcePriceChange = function(
  state,
  { cityId, resourceKey, newPrice }
  ) {
  state.world.cities[cityId].prices[resourceKey] = newPrice;
};

export const exchangeResourceForFactoryLevel = function(
  state,
  { cityId, factoryKey, cost }
  ) {
  var city = state.world.cities[cityId];

  _.each(cost, (amount, resourceType) => {
    city.warehouse[resourceType] -= amount;
  });

  city.factories[factoryKey].level += 1;
};

export const addWorkerToFactory = function(
  state,
  { cityId, factoryKey, changeAmount, popType }
  ) {
  var city = state.world.cities[cityId];
  var factory = city.factories[factoryKey];
  var population = city.population[popType];

  city.population[popType].idle -= changeAmount;
  city.population[popType].working += changeAmount;

  factory.workerCount += changeAmount;
};