import _ from 'lodash';

import Persistence from './Persistence';

import World from '../actions/World';

import newWorld from '../gameConfig/newWorld';

export default class Game {
    constructor(){

        this.load();

        this.tickWorld();
    }

    getNewWorld() {
        return _.cloneDeep(newWorld);
    }

    setWorld(config) {
        if (_.isEmpty(config)) {
            this.world = World.loadWorld(this.getNewWorld());
        } else {
            this.world = World.loadWorld(config);
        }
    }

    load() {
        var loaded = Persistence.loadGame();

        return this.setWorld(loaded);
    }

    save() {
        return Persistence.saveGame(World.toJSON(this.world));
    }

    tickWorld(){
        World.cycle(this.world);

        if (this.world.cycles%10 === 1) {
            this.save();
        }

        if (this.shouldTickWorld()) {
            window.setTimeout(() => this.tickWorld(), 1000);
        }
    }

    shouldTickWorld(){
        return true;
    }
}