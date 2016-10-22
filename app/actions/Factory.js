import _ from 'lodash';

import factoriesConfig from '../gameConfig/factories';

const Factory = {
    toJSON(factory) {
        return {
            id: factory.id,
            name: factory.name,
            cycles: factory.cycles,
            workers: factory.workers
        };
    },

    loadOne(savedConfig) {
        var config = _.find(factoriesConfig, { name: savedConfig.name });

        return _.extend({}, config, savedConfig);
    },

    createNew(factoryConfig) {
        return _.extend({}, factoryConfig, {
            id: new Date().valueOf(),
            cycles: 0
        });
    },

    cycle(factory) {
        factory.cycles += 1;
    },

};

export default Factory;