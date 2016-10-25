<style scoped lang="sass">

.city-info-row {
    width: 100%;
}

.city-details {
    padding: 1em;
    display: flex;
    flex-direction: row;

    .left-column {
        flex: 0 0 auto;
        padding: 1em;
    }

    .right-column {
        flex: 1 0 auto;
        padding: 1em;
    }
}

</style>

<template>

<div class="one-city">
    <div class="city-info-row">
        City: {{city.id}} {{city.cycles}}
    </div>

    <div class="city-details">
        <div class="left-column">
            <resource-table :city="city"></resource-table>
        </div>

        <div class="right-column">
            <div class="workers-panel">
                <population-table :city="city"></population-table>
            </div>

            <div class="factories-panel">

                <div class="build-tab">
                    <h2>Build Manufactory</h2>
                    <button v-for="(config, key) in factoriesConfig"
                        v-on:click="buildFactory(key, config)">
                        {{config.name}}
                    </button>
                </div>

                <div class="factories-tab">
                    <one-factory v-for="(instance, key) in city.factories"
                        :key="key"
                        :type-key="key"
                        :city-id="city.id"
                        :instance="instance"></one-factory>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import OneFactory from './OneFactory.vue';
import PopulationTable from './PopulationTable.vue';
import ResourceTable from './ResourceTable.vue';

import factoriesConfig from '../gameConfig/factories';
import popTypesConfig from '../gameConfig/popTypes';
import resTypesConfig from '../gameConfig/resources';

export default {
    name: 'OneCity',
    props: ['city'],
    data() {
        return {
            factoriesConfig,
            popTypesConfig,
            resTypesConfig
        };
    },
    methods: {
        buildFactory(factoryKey, factoryConfig) {
            return this.$store.dispatch('cityExpandFactory', {
                cityId: this.city.id,
                factoryKey,
                factoryConfig
            });
        }
    },
    components: {
        OneFactory,
        PopulationTable,
        ResourceTable
    }
};

</script>