import _ from 'lodash';

import * as resourceMath from '../utils/resourceMath';

export const setWorld = function(state, world){
    state.world = world;
};

export const updateWorldForCycle = function(state){
    state.world.cycles += 1;
};


//cycle ==============
export const updateCityForCycle = function (
  state,
  { cityId }
) {
  const city = state.world.cities[cityId];

  city.cycles += 1;
};

/*
  This step represents the people in the city buying stuff
  and storing stuff in their homes.
*/
export const cityBuyResources = function (
  state,
  { cityId, target }
) {
  const city = state.world.cities[cityId];

  const unmetDemand = resourceMath.max(resourceMath.subtract(target, city.stockpile), {});

  const toBuy = resourceMath.min(unmetDemand, city.warehouse);

  const cost = _.sum(_.values( resourceMath.multiply(toBuy, city.prices) ));

  state.world.money += cost;

  city.warehouse = resourceMath.subtract(city.warehouse, toBuy);
  city.stockpile = resourceMath.sum(city.stockpile, toBuy);
};

/*
  This step represents the people in the city
  consuming stuff from their stockpile
*/
export const cityConsumeResources = function (
  state,
  { cityId, demand }
) {
  const city = state.world.cities[cityId];

  city.stockpile = resourceMath.max(
    resourceMath.subtract(city.stockpile, demand), {});
};

/*
  One factory performs a production cycle.
  They will take as much resource as they want and available
  since they are invoked in priority order
*/
export const cityFactoryProduction = function (
  state,
  { cityId, facKey, facConfig }
) {
  const world = state.world;
  const city = world.cities[cityId];
  const factory = city.factories[facKey];

  if (!factory) { return; }

  const allowedByRes = resourceMath.ratio(city.warehouse, facConfig.input);

  const workersAfforded = Math.floor(world.money/facConfig.workerWage);

  const multiplesProduced = Math.min(
    workersAfforded, factory.workerCount, ...allowedByRes);

  const input = resourceMath.scale(facConfig.input, multiplesProduced);
  const output = resourceMath.scale(facConfig.output, multiplesProduced);

  city.warehouse = resourceMath.subtract(city.warehouse, input);
  city.warehouse = resourceMath.sum(city.warehouse, output);

  const costAtFull = facConfig.workerWage * factory.workerCount;

  world.money = Math.max(world.money - costAtFull, 0);
};

export const cityPopulationMigrate = function (
  state,
  { cityId, demand }
) {
  const city = state.world.cities[cityId];
  return;
  var eligibleFactories = _.filter(city.factories, function(factory, factoryKey){
    return factoriesConfig[factoryKey].workerPopType === popType &&
    factory.workerCount > 0;
  });

  if (factories.length === 0) {
    console.error('somthing is wrong with worker count', city.id, factoryKey);
  }

  var {locked, unlocked} = _.groupBy(eligibleFactories, 'lockStatus');

  var index = Math.floor(Math.random() * unlocked.length);

  if (unlocked[index.workerCount] < 0) {
    var remainingChange = 0 - unlocked[index.workerCount];
    var index2 = Math.floor(Math.random() * unlocked.length);
    unlocked[index2].workerCount -= remainingChange;
  }
};

//single city =============
export const commitCityWageChange = function(
  state,
  { cityId, popType, wage }
  ) {
  state.world.cities[cityId].population[popType].wage = wage;
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