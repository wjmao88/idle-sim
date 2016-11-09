
//factoriesMods
//populationMods
//resourceMods

export default {
  TC_RESEARCH: {
    cost: 100,
    unlockTechs: [
      'TC_BREW',
      'TC_FARMING',
      'TC_MINING'
    ]
  },

  TC_BREW: {
    cost: 500,
    unlockFactories: ['FC_BREWERY'],
    unlockResources: ['RS_BEER']
  },

  TC_FARMING: {
    cost: 1000,
    factoriesMod: function(facConfigs){

      facConfigs['FC_GRAIN'].output['RS_GRAIN'] *= 1.2;

      return facConfigs;
    }
  },

  TC_MINING: {
    cost: 1000,
    unlockTechs: ['TC_STEEL'],
    unlockFactories: ['FC_SMELTER'],
    unlockResources: ['RS_COAL', 'RS_IRON'],
  },

  TC_STEEL: {
    cost: 3000
  }
};
