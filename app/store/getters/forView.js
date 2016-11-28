import * as resourceMath from '../../utils/resourceMath';

const WOKER_MAX_PER_LEVEL = 5;

export const availableTechsInfo = (state, getters) => {
  const configs = getters.technologyConfig;
  return _.map(getters.availableTechs, (key) => {
    return {
      key,
      ...configs[key],
    };
  });
};

export const completedTechsInfo = (state, getters) => {
  const configs = getters.technologyConfig;
  return _.map(getters.completedTechs, (key) => {
    return {
      key,
      ...configs[key],
    };
  });
};

export const citiesInfo = (state, getters) => {
  return _.map(getters.world.cities, (city) => ({
    id: city.id,
    name: city.name,
    population: _.sum(_.map(city.population, 'total'))
  }));
};

export const cityPopulationInfo = (state, getters) => {
  return _.map(getters.cityPopulation, (instance, key) => {
    const config = getters.populationConfig[key];
    return {
      key,
      name: config.name,
      total: instance.total || 0,
      working: instance.working || 0,
      idle: instance.idle || 0
    };
  });
};

export const cityFactoriesInfo = (state, getters) => {
  return _.map(getters.cityFactories, (instance, key) => {
    const config = getters.factoriesConfig[key];
    return {
      ...instance,
      key,
      name: config.name,
      input: config.input,
      output: config.output,
      hasInput: !_.isEmpty(config.input),
      hasOutput: !_.isEmpty(config.output),
      inputTotal: resourceMath.scale(config.input, instance.workerCount),
      outputTotal: resourceMath.scale(config.output, instance.workerCount),
      wage: config.workerWage * instance.workerCount,
      workerMax: WOKER_MAX_PER_LEVEL * instance.level
    };
  });
};
