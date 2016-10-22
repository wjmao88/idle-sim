/*
    mainly for record keeping, settings, etc
*/
import City from './City';

import _ from 'lodash';

const World = {

    toJSON(world) {
        var save = _.extend({}, world);
        save.cities = _.map(world.cities, City.toJSON);

        return save;
    },

    loadWorld(config) {
        config.cities = _.map(config.cities, City.loadOne);
        return config;
    },

    cycle(world) {
        world.cycles += 1;

        _.each(world.cities, City.cycle);
    }

};

export default World;