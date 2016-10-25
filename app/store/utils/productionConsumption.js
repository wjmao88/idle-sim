import _ from 'lodash';

import factoriesConfig from '../../gameConfig/factories';
import popTypes from '../../gameConfig/popTypes';
import resTypes from '../../gameConfig/resources';

import mergeResourceMaps from './mergeResourceMaps';

const popTypesByPriority = _.map(_.orderBy(popTypes, 'priority', 'desc'), 'key');

const consumptionForPop = function(world, city, popType) {

    var popInfo = city.population[popType];

    var budget = popInfo.wage * popInfo.working;
    var budgetRemaining = budget;

    var score = _.map(popTypes[popType].consumption, function(amount, resType){
        var amountDemanded = amount * popInfo.total;
        var amountAvailable = city.warehouse[resType];
        var amountAffordable = Math.floor(budgetRemaining/resTypes[resType].cost);

        var amountToBuy = Math.min(amountDemanded, amountAffordable, amountAvailable);

        city.warehouse[resType] -= amountToBuy;
        var totalCost = amountToBuy * resTypes[resType].cost;
        world.money += totalCost;
        budgetRemaining -= totalCost;

        return amountToBuy/amountDemanded;
    });

    return _.sum(_.compact(score))/score.length + budgetRemaining/(1 + budget + budgetRemaining);
};

export const consumption = function(world, city) {
    _.each(popTypesByPriority, popType => {
        if (!city.population[popType] || !city.population[popType].total) {
            return;
        }

        var happy = consumptionForPop(world, city, popType);

        var currentHappy = city.population[popType].happiness || 1;

        city.population[popType].happiness = (happy + currentHappy)/2;
    });
};

const productionRequirementMerger = mergeResourceMaps((input, output) => {
    if (!input) {
        return Infinity;
    } else if (!output) {
        return 0;
    } else {
        return Math.floor(output/input);
    }
});

const productionResultMerger = mergeResourceMaps((...values) => {
    return _.sum(values);
});

const productionOneFactory = function(world, city, factory, type) {
    var config = factoriesConfig[type];

    var allowedByRes = productionRequirementMerger(config.input, city.warehouse);

    var amountProduced = Math.min(factory.workerCount, ...allowedByRes);

    if (amountProduced === 0) {
        return {};
    }

    return mergeResourceMaps(function(cost, out){
        return (cost || 0) * -amountProduced + (out || 0) * amountProduced;
    })(config.input, config.output);
};

export const production = function(world, city, factory) {
    var totalProduction = _.map(city.factories, (factory, type) => productionOneFactory(world, city, factory, type));

    var resourceChanges = productionResultMerger(...totalProduction);

    _.each(resourceChanges, (amount, key) => {
        city.warehouse[key] += amount;
    });
};