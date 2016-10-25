<style scoped lang="sass">

.one-factory {
    border: 1px solid;
    padding: 1em;
    margin: 1em;

    td:first-child {
        text-align: left;
    }
}

</style>

<template>

<article class="one-factory">
    <h1 class="factory-header">
        <span>{{info.name}}</span>
        <span>{{instance.level}}</span>
    </div>
    </h1>
    <div class="workers-row">
        <span>Workers:</span>
        <button v-on:click="increase()">+</button>
        <button v-on:click="decrease()">-</button>
        <span>{{instance.workerCount}}/{{workerMax}}</span>
    </div>
</article>

</template>

<script>

import factoriesConfig from '../gameConfig/factories';

export default {
    name: 'OneFactory',
    props: ['typeKey', 'instance', 'cityId'],
    data() {
        return {
            info: factoriesConfig[this.typeKey]
        };
    },
    computed: {
        workerMax() {
            return this.info.workerMaxPerLevel * this.instance.level;
        }
    },
    methods: {
        increase() {
            this.changeWorkerAmount(1);
        },
        decrease() {
            this.changeWorkerAmount(-1);
        },
        changeWorkerAmount(changeAmount) {
            this.$store.dispatch('moveWorkersToFactory', {
                cityId: this.cityId,
                factoryKey: this.typeKey,
                changeAmount
            });
        }
    }
};

</script>