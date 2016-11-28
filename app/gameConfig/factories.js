export default {
  'F_LUMBER': {
    'workerPopType': 'P_BASE',
    'workerWage': 150,
    'input': {},
    'output': {
      'R_LUMBER': 20
    }
  },
  'F_GRAIN': {
    'workerPopType': 'P_BASE',
    'workerWage': 150,
    'input': {},
    'output': {
      'R_GRAIN': 20
    }
  },

  'F_BAKERY': {
    'workerPopType': 'P_LOW',
    'workerWage': 300,
    'input': {
      'R_GRAIN': 10,
      'R_LUMBER': 5
    },
    'output': {
      'R_BREAD': 20
    }
  },

  'F_BREWERY': {
    'workerPopType': 'P_LOW',
    'workerWage': 300,
    'input': {
      'R_GRAIN': 30,
    },
    'output': {
      'R_BEER': 30
    }
  },

  'F_RANCH': {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {},
    'output': {
      'R_MEAT': 30,
      'R_SKIN': 30,
      'R_WOOL': 30,
      'R_OIL': 30
    }
  },

  'F_ORCHARD': {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {},
    'output': {
      'R_FRUIT': 50
    }
  },

  'F_WINERY': {
    'workerPopType': 'P_MIDDLE',
    'workerWage': 2000,
    'input': {
      'R_FRUIT': 200
    },
    'output': {
      R_WINE: 30
    }
  },

  'F_APIARY': {
    'workerPopType': 'P_LOW',
    'workerWage': 500,
    'input': {
    },
    'output': {
      R_HONEY: 20
    }
  },

  'F_COAL_MINE': {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {},
    'output': {
      'R_COAL': 50
    }
  },

  'F_MINE': {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {},
    'output': {
      'R_ORE': 50
    }
  },

  'F_SMELTER': {
    'workerPopType': 'P_LOW',
    'workerWage': 350,
    'input': {
      'R_ORE': 60,
      'R_COAL': 20
    },
    'output': {
      'R_IRON': 30
    }
  },

  'F_FOUNDRY': {
    'workerPopType': 'P_LOW',
    'workerWage': 400,
    'input': {
      'R_IRON': 30,
      'R_COAL': 60
    },
    'output': {
      'R_STEEL': 30
    }
  },

  'F_QUARRY': {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {
    },
    'output': {
      'R_STONE': 30,
      'R_CLAY': 20
    }
  },

  'F_KILN': {
    'workerPopType': 'P_LOW',
    'workerWage': 280,
    'input': {
      'R_CLAY': 60
    },
    'output': {
      'R_BRICK': 30
    }
  },

  'F_PITCH': {
    'workerPopType': 'P_LOW',
    'workerWage': 280,
    'input': {
      'R_COAL': 100,
      'R_LUMBER': 100
    },
    'output': {
      'R_PITCH': 30
    }
  },

  F_SALTWORKS: {
    'workerPopType': 'P_BASE',
    'workerWage': 180,
    'input': {
    },
    'output': {
      'R_SALT': 15
    }
  },

  F_CONFECTIONERY: {
    'workerPopType': 'P_MIDDLE',
    'workerWage': 3000,
    'input': {
      R_GRAIN: 20,
      R_FRUIT: 30,
      R_HONEY: 30
    },
    'output': {
      R_SWEETS: 10
    }
  },

  F_RATION: {
    'workerPopType': 'P_LOW',
    'workerWage': 400,
    'input': {
      R_GRAIN: 50,
      R_MEAT: 50,
      R_SALT: 20,
      R_HONEY: 20,
      R_CLOTH: 5
    },
    'output': {
      R_RATION: 10
    }
  },

  F_HEMP_FARM: {
    'workerPopType': 'P_BASE',
    'workerWage': 150,
    'input': {},
    'output': {
      'R_HEMP': 20
    }
  },

  F_COTTON_FARM: {
    'workerPopType': 'P_BASE',
    'workerWage': 200,
    'input': {},
    'output': {
      'R_COTTON': 20
    }
  },

  F_COTTON_MILL: {
    'workerPopType': 'P_LOW',
    'workerWage': 320,
    'input': {
      'R_COTTON': 100
    },
    'output': {
      'R_CLOTH': 50
    }
  },

  F_WOOL_MILL: {
    'workerPopType': 'P_LOW',
    'workerWage': 350,
    'input': {
      'R_WOOL': 100
    },
    'output': {
      'R_CLOTH': 30,
      'R_VELVET': 5
    }
  },

  F_TANNERY: {
    'workerPopType': 'P_LOW',
    'workerWage': 270,
    'input': {
      'R_SKIN': 20
    },
    'output': {
      'R_LEATHER': 20
    }
  }

};