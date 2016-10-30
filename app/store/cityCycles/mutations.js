import _ from 'lodash';

import * as resourceMath from '../../utils/resourceMath';

export const updateCityForCycle = function (
  state,
  { cityId },
  rootState
) {
  const city = rootState.world.cities[cityId];

  city.cycles += 1;
};

/*
  This step represents the people in the city buying stuff
  and storing stuff in their homes.
*/
export const cityBuyResources = function (
  state,
  { cityId, target },
  rootState
) {
  const city = rootState.world.cities[cityId];

  const unmetDemand = resourceMath.max(resourceMath.subtract(target, city.stockpile), {});

  const toBuy = resourceMath.min(unmetDemand, city.warehouse);

  const cost = _.sum(_.values( resourceMath.multiply(toBuy, city.prices) ));

  rootState.world.money += cost;

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
  const city = rootState.world.cities[cityId];

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
  const city = rootState.world.cities[cityId];
  const factory = city.factories[facKey];

  if (!factory) { return; }

  const allowedByRes = resourceMath.ratio(city.warehouse, facConfig.input);

  const multiplesProduced = Math.min(factory.workerCount, ...allowedByRes);

  const input = resourceMath.scale(facConfig.input, multiplesProduced);
  const output = resourceMath.scale(facConfig.output, multiplesProduced);

  city.warehouse = resourceMath.subtract(city.warehouse, input);
  city.warehouse = resourceMath.sum(city.warehouse, output);
};

export const cityPopulationMigrate = function (
  state,
  { cityId, demand }
) {
  const city = rootState.world.cities[cityId];



  const score = _.sum(scores)/scores.length;

  var direction = popInfo.happiness > 1? 1 : -1;
  var value = Math.abs(popInfo.happiness - 1);


    var seed = Math.random();

    if (seed < value){
      popTypeMigration(city, popType, direction);
    }

  _.each(city.population, function(popInfo, popType){
    if (popInfo.working > popInfo.total) {
      ensureWorkerCounts(city, popInfo.working - popInfo.total, popType);
      popInfo.working = popInfo.total;
      popInfo.idle = 0;
    } else {
      popInfo.idle = popInfo.total - popInfo.working;
    }

    //rescue from dead game
    if (popInfo.total === 0) {
      popInfo.total = 1;
      popInfo.idle = 1;
    }
  });


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