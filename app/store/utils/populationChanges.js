import popTypes from '../../gameConfig/popTypes';

import factoriesConfig from '../../gameConfig/factories';

export const cityGrowth = function(city){
    _.each(city.population, function(popInfo, popType){
        var sign = popInfo.happiness > 1? 1 : -1;
        var value = Math.abs(popInfo.happiness - 1);

        var seed = Math.random();

        var change = seed < value? sign : 0;

        popInfo.total += change;

        if (popInfo.total < 0) {
            popInfo.total = 0;
        }

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

export const ensureWorkerCounts = function(city, diff, popType){

    var factories = _.filter(city.factories, function(factory, factoryKey){
        return factoriesConfig[factoryKey].workerPopType === popType &&
            factory.workerCount > 0;
    });

    if (factories.length === 0) {
        console.error('somthing is wrong with worker count', city.id, factoryKey);
    }

    var index = Math.floor(Math.random() * factories.length);

    factories[index].workerCount -= diff;
};