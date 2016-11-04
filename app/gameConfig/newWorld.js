export default {
    'cycles': 0,
    'money': 1000,
    'cities': {
        11111: {
            'id': 11111,
            'name': 'New City',
            'cycles': 0,
            'factories': {
                FC_LUMBER: {
                    'level': 1,
                    'cycles': 0,
                    'workerCount': 0
                },
                FC_GRAIN : {
                    'level': 1,
                    'cycles': 0,
                    'workerCount': 0
                }
            },
            population: {
                'PT_BASE': {
                    wage: 90,
                    total: 10,
                    working: 0,
                    idle: 10,
                    happiness: 1
                }
            },
            prices: {
                'RS_GRAIN': 10,
                'RS_LUMBER': 10
            },
            warehouse: {
                'RS_GRAIN': 100,
                'RS_LUMBER': 100
            },
            stockpile: {
                'RS_GRAIN': 800,
                'RS_LUMBER': 100
            }
        }
    }
};