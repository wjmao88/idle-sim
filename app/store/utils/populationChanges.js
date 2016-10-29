import popTypes from '../../gameConfig/popTypes';

import factoriesConfig from '../../gameConfig/factories';

export const cityGrowth = function(city){
  _.each(city.population, function(popInfo, popType){
    var direction = popInfo.happiness > 1? 1 : -1;
    var value = Math.abs(popInfo.happiness - 1);

    var seed = Math.random();

    if (seed < value){
      popTypeMigration(city, popType, direction);
    }
  });

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
};

export const popTypeMigration = function(city, popType, direction){

    if (popInfo.total < 0) {
      popInfo.total = 0;
    }
};

export const ensureWorkerCounts = function(city, diff, popType){

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