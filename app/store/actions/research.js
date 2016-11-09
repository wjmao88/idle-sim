

export const upgradeTech = function(
  { getters, commit, dispatch },
  { techKey }
  ) {

  const city = getters.currentCity;

  const techConfig = getters.technologyConfig[techKey];
  const resConfigs = getters.resourcesConfig;

  if (getters.world.money >= techConfig.cost) {
    commit('upgradeTech', { techKey, techConfig, resConfigs });
    dispatch('saveGame');
  }

};