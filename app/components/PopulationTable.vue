<style scoped lang="sass">

.population-table {
    border: 1px solid;
    padding: 1em;

    td {
        text-align: right
    }

    td:first-child {
        text-align: left;
    }
}

</style>

<template>

<table class="population-table">
    <thead>
        <th>Class</th>
        <th>Total</th>
        <th>Working</th>
        <th>Happiness</th>
        <th>Wage</th>
    </thead>
    <tr v-for="popInfo in population">
        <td>{{popInfo.name}}</td>
        <td>{{popInfo.total}}</td>
        <td>{{popInfo.working}}</td>
        <td>{{popInfo.happiness}}</td>
        <td>
            <input v-model="popInfo.wage"
                v-on:blur="wageUpdate(popInfo)"/>
        </td>
    </tr>
</table>

</template>

<script>

import OneFactory from './OneFactory.vue';

import popTypesConfig from '../gameConfig/popTypes';

export default {
    name: 'OneCity',
    props: ['city'],
    data() {
        return {
            popTypesConfig
        };
    },
    computed: {
        population(){
            var city = this.city;
            return _.map(this.popTypesConfig, (config, key) => {
                var pop = city.population[key] || {};
                return {
                    key: key,
                    name: config.name,
                    total: pop.total || 0,
                    working: pop.working || 0,
                    idle: pop.idle || 0,
                    wage: pop.wage || 0,
                    happiness: Math.round(pop.happiness * 100)/100 || 0
                };
            });
        }
    },
    methods: {
        wageUpdate(popInfo){
            return this.$store.dispatch('cityWageChange', {
                cityId: this.city.id,
                popType: popInfo.key,
                wage: popInfo.wage
            });
        }
    }
};

</script>