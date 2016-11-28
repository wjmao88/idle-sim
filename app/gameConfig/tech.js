
//factoriesMods
//populationMods
//resourceMods

export default {
  T_RESEARCH: {
    cost: 100,
    unlockTechs: [
      'T_FARMING',
      'T_RANCHING',
      'T_MINING',
      'T_TEXTILES'
    ]
  },

  T_FARMING: {
    cost: 1000,
    unlockTechs: ['T_ORCHARD', 'T_BREWING'],
    factoriesMod(facConfigs) {

      facConfigs['F_GRAIN'].output['R_GRAIN'] *= 1.2;

      return facConfigs;
    }
  },

  T_BREWING: {
    cost: 500,
    unlockFactories: ['F_BREWERY'],
    unlockResources: ['R_BEER']
  },

  T_RANCHING: {
    cost: 5000,
    unlockResources: ['R_WOOL', 'R_MEAT', 'R_SKIN', 'R_OIL'],
    unlockFactories: ['F_RANCH']
  },

  T_MINING: {
    cost: 1000,
    unlockTechs: ['T_STEEL', 'T_MASONRY'],
    unlockFactories: [
      'F_COAL_MINE',
      'F_MINE',
      'F_SMELTER'
    ],
    unlockResources: ['R_COAL', 'R_ORE', 'R_IRON'],
  },

  T_STEEL: {
    cost: 3000,
    unlockFactories: ['F_FOUNDRY'],
    unlockResources: ['R_STEEL']
  },

  T_MASONRY: {
    cost: 3000,
    unlockFactories: ['F_QUARRY', 'F_KILN'],
    unlockResources: ['R_STONE', 'R_CLAY', 'R_BRICK']
  },

  T_ORCHARD: {
    cost: 3000,
    unlockFactories: ['F_ORCHARD'],
    unlockResources: ['R_FRUIT'],
    unlockTechs: ['T_WINE', 'T_BEEKEEPING']
  },

  T_WINE: {
    cost: 10000,
    unlockFactories: ['F_WINERY'],
    unlockResources: ['R_WINE']
  },

  T_BEEKEEPING: {
    cost: 10000,
    unlockFactories: ['F_APIARY'],
    unlockResources: ['R_HONEY'],
    factoriesMod(facConfigs) {
      facConfigs['F_ORCHARD'].output['R_FRUIT'] *= 1.5;
    }
  },

  T_TEXTILES: {
    cost: 3000,
    unlockTechs: ['T_HEMP', 'T_COTTON', 'T_WOOL'],
    unlockFactories: [
      'F_WOOL_MILL',
      'F_TANNERY',
    ],
    unlockResources: [
      'R_CLOTH',
      'R_VELVET',
      'R_LEATHER'
    ]
  },

  T_WOOL: {
    cost: 10000,
    unlockResources: ['R_VELVET'],
    factoriesMod(facConfigs) {
      facConfigs['F_RANCH'].output['R_WOOL'] *= 1.2;
      facConfigs['F_WOOL_MILL'].output['R_VELVET'] *= 20;

      return facConfigs;
    }
  },

  T_COTTON: {
    cost: 3000,
    unlockFactories: [
      'F_COTTON_FARM',
      'F_COTTON_MILL'
    ],
    unlockResources: [
      'R_COTTON'
    ]
  },

  T_HEMP: {
    cost: 5000,
    unlockFactories: ['F_HEMP_FARM'],
    unlockResources: ['R_HEMP']
  }

};
