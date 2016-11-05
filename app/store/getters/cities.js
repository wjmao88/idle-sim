import * as resourceMath from '../../utils/resourceMath';

export const cities = (state, getters) => {
  return state.world.cities;
};

/*
  consumption/production calculation for all cities
*/

export const citiesDemand = (state, getters) => {
  return _.mapValues(getters.cities, (city) => {
    return _.mapValues(city.population, (popStatus, popKey) => {
      return resourceMath.scale(
        getters.populationConfig[popKey].consumption, popStatus.total);
    });
  });
};

export const citiesDemandTotal = (state, getters) => {
  return resourceMath.mapSumValues(getters.citiesDemand);
};

export const citiesDemandCost = (state, getters) => {
  return _.mapValues(getters.citiesDemand, (demandByPop, cityId) => {
    return _.mapValues(demandByPop, (demand) => {
      return _.sum(_.values(resourceMath.multiply(demand, getters.cities[cityId].prices)));
    });
  });
};


//more detailed version of demand cost by each resource
//mostly used as a weight
export const citiesDemandBaseCostByRes = (state, getters) => {
  return _.mapValues(getters.citiesDemand, (demandByPop, cityId) => {
    return _.mapValues(demandByPop, (demand) => {
      return resourceMath.multiply(demand, getters.resourcesBasePrice);
    });
  });
};

//citiesDemandCost but using base cost
//using base cost for weighting independent of player set prices
export const citiesDemandBaseCost = (state, getters) => {
  return _.mapValues(getters.citiesDemandBaseCostByRes, (demandByPop, cityId) => {
    return _.mapValues(demandByPop, (demand) => {
      return _.sum(_.values(demand));
    });
  });
};

export const citiesDemandCostTotal = (state, getters) => {
  return _.mapValues(getters.citiesDemandCost, (cost) => {
    return _.sum(_.values(cost));
  });
};

export const citiesStockpileToDemandRatio = (state, getters) => {
  return _.mapValues(getters.citiesDemandTotal, (cityDemand, cityId) => {
    const city = getters.cities[cityId];
    return resourceMath.ratio(city.stockpile, cityDemand);
  });
};

export const citiesPopDemandToDemandRatio = (state, getters) => {
  return _.mapValues(getters.citiesDemand, (cityDemand, cityId) => {
    const demandTotal = getters.citiesDemandTotal[cityId];
    return _.mapValues(cityDemand, (popDemand, popKey) => {
      return resourceMath.ratio(popDemand, demandTotal);
    });
  });
};

//the weight of each resource, adjusted for amount and price
export const citiesPopDemandWeightPerRes = (state, getters) => {
  return _.mapValues(getters.citiesDemandBaseCostByRes, (cityDemandCost, cityId) => {
    return _.mapValues(cityDemandCost, (popDemandCost, popKey) => {
      const demandCost = getters.citiesDemandBaseCost[cityId][popKey];
      return resourceMath.scale(popDemandCost, 1/demandCost);
    });
  });
};

//ratio of city stockpile allocated proportionally to each pop
//and comparing agsinst the demand for that pop
//which is a more accurate map of demand meeting situation
//for each individual resources
//since demand is scaled for population, so is the ratio
export const citiesStockpileToPopDemandRatio = (state, getters) => {
  return _.mapValues(getters.citiesDemand, (cityDemand, cityId) => {
    const stockpileToDemand = getters.citiesStockpileToDemandRatio[cityId];
    return _.mapValues(cityDemand, (popDemand, popKey) => {
      const popToTotal = getters.citiesPopDemandToDemandRatio[cityId][popKey];
      return resourceMath.multiply(stockpileToDemand, popToTotal);
    });
  });
};

//A single score for each pop type
//that is a ratio of stockpile : demand
//weighted by pop demand and cost
//giving a final multiple of how many times the demand can be met
export const citiesWeightedStockpileToDemandByPop = (state, getters) => {
  return _.mapValues(getters.citiesStockpileToPopDemandRatio, (cityDemandRatio, cityId) => {
    return _.mapValues(cityDemandRatio, (popDemandRatio, popKey) => {
      const weight = getters.citiesPopDemandWeightPerRes[cityId][popKey];
      return _.sum(_.values(resourceMath.multiply(popDemandRatio, weight)));
    });
  });
};

/*
  The target that the city population would want to stock up to
  At base price, they will try to replenish their stockpile to 10 cycles supply
  At higher price, the target stockpile is lower, and vice versa.
*/
export const citiesRestockTarget = (state, getters) => {
  return _.mapValues(getters.citiesDemandTotal, (demand) => {
    return resourceMath.scale(demand, 10);
  });
};

export const citiesProductionCapacity = (state, getters) => {
  return _.mapValues(getters.cities, (city) => {
    return _.mapValues(city.factories, (factory, facKey) => {
      const facConfig = getters.factoriesConfig[facKey];
      const unitProd = resourceMath.subtract(facConfig.output, facConfig.input);
      return resourceMath.scale(unitProd, factory.workerCount);
    });
  });
};

export const citiesProductionCapacityTotal = (state, getters) => {
  return resourceMath.mapSumValues(getters.citiesProductionCapacity);
};

export const citiesWorkerWageByFactory = (state, getters) => {
  return _.mapValues(getters.cities, (city) => {
    return _.mapValues(city.factories, (factory, facKey) => {
      const facConfig = getters.factoriesConfig[facKey];
      return factory.workerCount * facConfig.workerWage;
    });
  });
};

export const citiesWorkerWageByPop = (state, getters) => {
  return _.mapValues(getters.citiesWorkerWageByFactory, (cityWageByFactory) => {
    const configs = getters.factoriesConfig;
    return _.chain(cityWageByFactory)
      .map((amount, key) => {
        return {
          amount,
          popType: configs[key].workerPopType
        };
      })
      .groupBy('popType')
      .mapValues(data => _.sum(_.map(data, 'amount')))
      .value();
  });
};

export const citiesWorkerWageTotal = (state, getters) => {
  return _.mapValues(getters.citiesWorkerWageByFactory, city => _.sum(_.values(city)));
};
