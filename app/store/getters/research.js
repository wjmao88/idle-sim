import _ from 'lodash';

import techConfigs from '../../gameConfig/tech';

export const availableTechs = function (state, getters) {
  return _.keys(_.omitBy(getters.world.technologies));
};

export const completedTechs = function (state, getters) {
  return _.keys(_.pickBy(getters.world.technologies));
};

export const resourcesMods = function (state, getters) {
  return _.map(getters.completedTechs,
    (tech) => getters.technologyConfig[tech].resourcesMod || _.identity);
};

export const factoriesMods = function (state, getters) {
  return _.map(getters.completedTechs,
    (tech) => getters.technologyConfig[tech].factoriesMod || _.identity);
};

export const populationMods = function (state, getters) {
  return _.map(getters.completedTechs,
    (tech) => getters.technologyConfig[tech].populationMod || _.identity);
};