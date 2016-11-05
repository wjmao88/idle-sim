import _ from 'lodash';

import * as resourceMath from '../../utils/resourceMath';

export const updateWorldForCycle = function(state){
    state.world.cycles += 1;
};

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
  { cityId, popKey, popConfig, popScore, popFactories }
) {
  const city = state.world.cities[cityId];
  const popInfo = city.population[popKey] || { total: 0, working: 0, idle: 0};

  const score = Math.log10(popScore);

  const popChange = Math.round((Math.random() + 0.5) * score);

  popInfo.total += popChange;
  popInfo.idle += popChange;

  const adjustment = popInfo.idle > 0? 0 : -popInfo.idle;
  popInfo.idle += adjustment;
  popInfo.working -= adjustment;

  var eligibleFactories = _.filter(popFactories, function(facConfig){
    const factory = city.factories[facConfig.key];
    return factory && factory.workerCount > 0;
  });

  if (eligibleFactories.length === 0) {
    console.error('somthing is wrong with worker count', city.id, factoryKey);
  }

  //not very efficient
  for (let counter = 0; counter <= adjustment; counter++) {
    let index = Math.floor(Math.random() * eligibleFactories.length);
    eligibleFactories[index].workerCount -= 1;
    if (eligibleFactories[index].workerCount === 0) {
      eligibleFactories.splice(index, 1);
    }
  }

  if (!city.population[popKey]){
    city.population[popKey] = popInfo;
  }
};
