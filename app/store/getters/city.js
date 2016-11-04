/*
  getters for current city
  basically the current city slice of the overall calculations
*/

export const currentCity = (state, getters) => {
  return getters.params.cityId &&
    getters.world.cities[getters.params.cityId] || {};
};

export const cityPopulation = (state, getters) => {
  return getters.currentCity.population;
};

export const cityFactories = (state, getters) => {
  return getters.currentCity.factories;
};

export const cityDemand = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesDemand[city.id];
};

export const cityDemandTotal = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesDemandTotal[city.id];
};

export const cityDemandCost = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesDemandCost[city.id];
};

export const cityDemandCostTotal = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesDemandCostTotal[city.id];
};

export const cityProductionCapacity = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesProductionCapacity[city.id];
};

export const cityProductionCapacityTotal = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesProductionCapacityTotal[city.id];
};

export const cityWorkerWageByFactory = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesWorkerWageByFactory[city.id];
};

export const cityWorkerWageByPop = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesWorkerWageByPop[city.id];
};

export const cityWorkerWageTotal = (state, getters) => {
  const city = getters.currentCity;
  return getters.citiesWorkerWageTotal[city.id];
};
