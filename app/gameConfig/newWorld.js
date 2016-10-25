export default {
    'cycles': 0,
    'money': 1000,
    'cities': {
        11111: {
            'id': 11111,
            'name': 'New City',
            'cycles': 0,
            'factories': {
                F1_LUMBER: {
                    'level': 1,
                    'cycles': 0,
                    'workerCount': 0
                },
                F2_GRAIN : {
                    'level': 1,
                    'cycles': 0,
                    'workerCount': 0
                }
            },
            population: {
                'PT_BASE': {
                    wage: 10,
                    total: 10,
                    working: 0,
                    idle: 10,
                    happiness: 1
                }
            },
            prices: {
                'RS_GRAIN': 1,
                'RS_LUMBER': 1
            },
            warehouse: {
                'RS_GRAIN': 100,
                'RS_LUMBER': 100
            }
        }
    }
};