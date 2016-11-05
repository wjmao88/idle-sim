
//factoriesMods
//populationMods
//resourceMods

export default {
  TC_BREW: {
    cost: 500,
    unlocks: []
  },

  TC_FARMING: {
    cost: 1000,
    factoriesMod: function(facConfigs){

      facConfigs['FC_GRAIN'].output['RS_GRAIN'] *= 1.2;

      return facConfigs;
    }
  },

  TC_MINING: {
    cost: 500,
    unlocks: ['FC_SMELTER'],
    unlockTechs: ['TC_STEEL'],
  },
};
