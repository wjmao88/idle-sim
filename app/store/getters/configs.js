import _ from 'lodash';

import popConfigs from '../../gameConfig/popTypes';
import facConfigs from '../../gameConfig/factories';
import resConfigs from '../../gameConfig/resources';
import techConfigs from '../../gameConfig/tech';

const addKeys = configs => _.mapValues(configs, (config, key) => _.extend(config, {key}) );

const keyPopConfigs = addKeys(popConfigs);
const keyFacConfigs = addKeys(facConfigs);
const keyTechConfigs = addKeys(techConfigs);
const keyResConfigs = _.mapValues(resConfigs, (cost, key) => ({ cost, key }));

export const technologyConfig = () => {
  return keyTechConfigs;
};

const applyMod = (config, mod) => mod(config);

export const resourcesConfig = (state, getters) => {
  return _.reduce(getters.researchResMod, applyMod, keyResConfigs);
};

export const factoriesConfig = (state, getters) => {
  return _.reduce(getters.researchFacMod, applyMod, keyFacConfigs);
};

export const populationConfig = (state, getters) => {
  return _.reduce(getters.researchPopMod, applyMod, keyPopConfigs);
};

export const factoriesConfigOrdered = (state, getters) => {
  return _.orderBy(getters.factoriesConfig, 'priority', 'desc');
};

export const factoriesByWorkerType = (state, getters) => {
  return _.groupBy(_.values(getters.factoriesConfig), 'workerPopType');
};

export const resourcesBasePrice = (state, getters) => {
  return resConfigs;
};
