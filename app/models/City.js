import Population from './Population';

export default class City {
    constructor (resource, pops, factories){
        this.factories = factories || [];
        this.warehouse = resource || {};

        this.population = _.map(pops || [], function(pops){
            return new Population(pops);
        });

        this.population.sort(function(a, b){
            return a.buyingPriority - b.buyingPriority;
        });
    }

    consume(){
        var warehouse = this.warehouse;

        _.each(this.population, function(pop){
            pop.consumeFrom(warehouse);
        });
    }

    getWorkerCoverage (pops, factories){
        var workersRequired = _.reduce(factories, function(sum, f){
            return sum + f.workers;
        }, 0);

        var workersAvailable = _.reduce(pops, function(sum, p){
            return p.isWorker? p.count : 0;
        }, 0);

        return Math.min(1, workersAvailable/workersRequired);
    }

    produce(){
        if (!this.factories.length){ return; }

        var workerCoverage = this.getWorkerCoverage(
            this.population,
            this.factories);

        var warehouse = this.warehouse;

        _.each(this.factories, function(pop){
            factories.consumeFrom(warehouse, workerCoverage);
        });
    }

    growth(){
        var populationSupport = this.populationSupport;
        _.each(this.population, function(pop){
            pop.grow(populationSupport);
        });
    }
}