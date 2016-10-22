/*
    represents a collection of action performing agents
*/
import Factory from './Factory';

import _ from 'lodash';

const City = {

    toJSON(city) {
        var save = _.extend({}, city);
        save.factories = _.map(city.factories, Factory.toJSON);

        return save;
    },

    loadOne(config) {
        config.factories = _.map(config.factories, Factory.loadOne);
        return config;
    },

    createNew() {
        return {
            id: new Date().valueOf(),
            name: 'New City',
            cycles: 0,
            factories: []
        };
    },

    cycle(city) {
        city.cycles += 1;

        _.each(city.factories, Factory.cycle);
    },

    addFactory(city, factoryConfig) {
        city.factories.push(Factory.createNew(factoryConfig));
    }

};

export default City;