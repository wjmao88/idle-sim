import World from './models/World';

(function(){
    const world = new World();

    var tick = function(){
        world.cycle();
        window.setTimeout(tick, 1000);
    };
})();
