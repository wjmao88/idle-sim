import World from '../actions/World';

export const setWorld = function(state, world){
    state.world = world;
};

export const cycleWorld = function(state){
    World.cycle(state.world);
};