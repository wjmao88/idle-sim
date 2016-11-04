export default {
    'FC_LUMBER': {
        'key': 'FC_LUMBER',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 10,
        'workerWage': 150,
        'input': {},
        'output': {
            'RS_LUMBER': 20
        }
    },
    'FC_GRAIN': {
        'key': 'FC_GRAIN',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 10,
        'workerWage': 150,
        'input': {},
        'output': {
            'RS_GRAIN': 20
        }
    },
    'FC_BAKERY': {
        'key': 'FC_BAKERY',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 5,
        'workerWage': 200,
        'input': {
            'RS_GRAIN': 10,
            'RS_LUMBER': 5
        },
        'output': {
            'RS_BREAD': 20
        }
    },
    'FC_BREWERY': {
        'key': 'FC_BREWERY',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 5,
        'workerWage': 200,
        'input': {
            'RS_GRAIN': 30,
        },
        'output': {
            'RS_BEER': 30
        }
    },
    'FC_RANCH': {
        'key': 'FC_RANCH',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 5,
        'workerWage': 200,
        'input': {},
        'output': {
            'RS_MEAT': 30,
            'RS_LEATHER': 30,
            'RS_OIL': 30
        }
    },
    'FC_SMELTER': {
        'key': 'FC_SMELTER',
        'workerPopType': 'PT_BASE',
        'workerMaxPerLevel': 5,
        'workerWage': 200,
        'input': {},
        'output': {
            'RS_IRON': 30
        }
    }
};