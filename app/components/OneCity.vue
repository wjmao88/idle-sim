
<template>

<div>
    <div class="city">
        {{cityString}}
    </div>

    <div class="city-build-factory">
        <h2>Build Manufactory</h2>
        <button v-for="factoryConfig in factoriesConfig"
            v-on:click="buildFactory(factoryConfig)">
            {{factoryConfig.name}}
        </button>
    </div>

    <div class="factories-panel">
        <one-factory v-for="factory in city.factories"
            :key="factory.id"
            :factory="factory"></one-factory>
    </div>
</div>

</template>

<script>

import OneFactory from './OneFactory.vue';
import City from '../actions/City';

import factoriesConfig from '../gameConfig/factories';

export default {
    name: 'OneCity',
    props: ['city'],
    data() {
        return {
            factoriesConfig
        };
    },
    methods: {
        buildFactory(factoryConfig) {
            return City.addFactory(this.city, factoryConfig);
        }
    },
    computed: {
        cityString() {
            return `
                ${this.city.id} ${this.city.cycles}
            `;
        }
    },
    components: {
        OneFactory
    }
};

</script>