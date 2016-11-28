export default {
  'cycles': 0,
  'money': 1000,
  'technologies': {
    T_RESEARCH: false
  },
  'cities': {
    11111: {
      'id': 11111,
      'name': 'New City',
      'cycles': 0,
      'factories': {
        F_LUMBER: {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
        },
        F_GRAIN : {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
        }
      },
      population: {
        'P_BASE': {
          total: 10,
          working: 0,
          idle: 100
        }
      },
      prices: {
        'R_GRAIN': 10,
        'R_LUMBER': 10
      },
      warehouse: {
        'R_GRAIN': 100,
        'R_LUMBER': 100
      },
      stockpile: {
        'R_GRAIN': 800,
        'R_LUMBER': 100
      }
    },

    22222: {
      'id': 22222,
      'name': 'Test City',
      'cycles': 0,
      'factories': {
        F_LUMBER: {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
        },
        F_GRAIN : {
          'level': 1,
          'cycles': 0,
          'workerCount': 0
        }
      },
      population: {
        'P_BASE': {
          total: 1,
          working: 0,
          idle: 1
        },

        'P_LOW': {
          total: 1,
          working: 0,
          idle: 1
        },


        'P_MIDDLE': {
          total: 1,
          working: 0,
          idle: 1
        },

        'P_HIGH': {
          total: 1,
          working: 0,
          idle: 1
        }
      },
      warehouse: {
        //materials
        R_LUMBER: 20,
        R_STONE: 20,
        R_CLAY: 20,
        R_BRICK: 20,
        R_PITCH: 20,

        //raw food
        R_GRAIN: 20,
        R_MEAT: 20,
        R_FISH: 20,
        R_SALT: 20,
        R_FRUIT: 20,
        R_HONEY: 20,

        //prepared food
        R_BEER: 20,
        R_BREAD: 20,
        R_WINE: 20,
        R_SWEETS: 20,
        R_RATION: 20,

        //textile plants
        R_HEMP: 20,
        R_COTTON: 20,
        R_WOOL: 20,
        R_SKIN: 20,

        //textiles
        R_CLOTH: 20,
        R_LEATHER: 20,
        R_VELVET: 20,

        //living
        R_OIL: 20,

        //metals
        R_ORE: 20,
        R_COAL: 20,
        R_IRON: 20,
        R_STEEL: 20
      },
      stockpile: {
        //materials
        R_LUMBER: 20,
        R_STONE: 20,
        R_CLAY: 20,
        R_BRICK: 20,
        R_PITCH: 20,

        //raw food
        R_GRAIN: 20,
        R_MEAT: 20,
        R_FISH: 20,
        R_SALT: 20,
        R_FRUIT: 20,
        R_HONEY: 20,

        //prepared food
        R_BEER: 20,
        R_BREAD: 20,
        R_WINE: 20,
        R_SWEETS: 20,
        R_RATION: 20,

        //textile plants
        R_HEMP: 20,
        R_COTTON: 20,
        R_WOOL: 20,
        R_SKIN: 20,

        //textiles
        R_CLOTH: 20,
        R_LEATHER: 20,
        R_VELVET: 20,

        //living
        R_OIL: 20,

        //metals
        R_ORE: 20,
        R_COAL: 20,
        R_IRON: 20,
        R_STEEL: 20
      },
      prices: {
        //materials
        R_LUMBER: 20,
        R_STONE: 20,
        R_CLAY: 20,
        R_BRICK: 20,
        R_PITCH: 20,

        //raw food
        R_GRAIN: 20,
        R_MEAT: 20,
        R_FISH: 20,
        R_SALT: 20,
        R_FRUIT: 20,
        R_HONEY: 20,

        //prepared food
        R_BEER: 20,
        R_BREAD: 20,
        R_WINE: 20,
        R_SWEETS: 20,
        R_RATION: 20,

        //textile plants
        R_HEMP: 20,
        R_COTTON: 20,
        R_WOOL: 20,
        R_SKIN: 20,

        //textiles
        R_CLOTH: 20,
        R_LEATHER: 20,
        R_VELVET: 20,

        //living
        R_OIL: 20,

        //metals
        R_ORE: 20,
        R_COAL: 20,
        R_IRON: 20,
        R_STEEL: 20
      }
    }
  }
};