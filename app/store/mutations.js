
export const setWorld = function(state, world){
    state.world = world;
};

export const updateWorldForCycle = function(state){
    state.world.cycles += 1;
};

