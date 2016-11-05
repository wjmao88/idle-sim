import _ from 'lodash';

import popConfigs from '../../gameConfig/popTypes';
import facConfigs from '../../gameConfig/factories';
import resConfigs from '../../gameConfig/resources';
import techConfigs from '../../gameConfig/tech';

export const technologyConfig = () => {
  return techConfigs;
};

export const resourcesConfig = (state, getters) => {
  return _.reduce(getters.researchResMod, (resConfigs, resMod) => {
    return resMod(resConfigs);
  }, resConfigs);
};

export const factoriesConfig = (state, getters) => {
  return _.reduce(getters.researchFacMod, (facConfigs, facMod) => {
    return facMod(facConfigs);
  }, facConfigs);
};

export const populationConfig = (state, getters) => {
  return _.reduce(getters.researchPopMod, (popConfigs, popMod) => {
    return popMod(popConfigs);
  }, popConfigs);
};

export const factoriesConfigOrdered = (state, getters) => {
  return _.orderBy(getters.factoriesConfig, 'priority', 'desc');
};

export const factoriesByWorkerType = (state, getters) => {
  return _.groupBy(_.values(getters.factoriesConfig), 'workerPopType');
};

export const resourcesBasePrice = (state, getters) => {
  return _.mapValues(getters.resourcesConfig, 'cost');
};
