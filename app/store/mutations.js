import _ from 'lodash';

import factoriesConfig from '../gameConfig/factories';
import popTypes from '../gameConfig/popTypes';
import resTypes from '../gameConfig/resources';

import mergeResourceMaps from './utils/mergeResourceMaps';

import {production, consumption} from './utils/productionConsumption';

//import {cityGrowth, ensureWorkerCounts} from './utils/populationChanges';

export const setWorld = function(state, world){
    state.world = world;
};

export const cycleWorld = function(state){
    state.world.cycles += 1;

    _.each(state.world.cities, function(city){
        city.cycles += 1;

        consumption(state.world, city);
        production(state.world, city);

        cityGrowth(city);
    });
};

//City ======================
export const commitCityWageChange = function(state, { cityId, popType, wage}){
    state.world.cities[cityId].population[popType].wage = wage;
};

export const exchangeResourceForFactoryLevel = function(state, { cityId, factoryKey, cost}){
    var city = state.world.cities[cityId];

    _.each(cost, (amount, resourceType) => {
        city.warehouse[resourceType] -= amount;
    });

    city.factories[factoryKey].level += 1;
};

export const addWorkerToFactory = function(state, { cityId, factoryKey, changeAmount, popType}){
    var city = state.world.cities[cityId];
    var factory = city.factories[factoryKey];
    var population = city.population[popType];

    city.population[popType].idle -= changeAmount;
    city.population[popType].working += changeAmount;

    factory.workerCount += changeAmount;
};