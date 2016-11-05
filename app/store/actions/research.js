

export const upgradeTech = function(
  { getters, commit, dispatch },
  { techKey }
  ) {

  const city = getters.currentCity;

  const techConfig = getters.technologyConfig[techKey];

  if (world.moey >= techConfig.cost) {
    commit('upgradeTech', { techKey, techConfig });
  }
};