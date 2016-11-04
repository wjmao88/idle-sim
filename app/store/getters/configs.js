
import popConfigs from '../../gameConfig/popTypes';
import facConfigs from '../../gameConfig/factories';
import resConfigs from '../../gameConfig/resources';

export const resourcesConfig = () => {
  return resConfigs;
};

export const factoriesConfig = () => {
  return facConfigs;
};

export const populationConfig = () => {
  return popConfigs;
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
