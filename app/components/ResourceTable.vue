<style scoped lang="sass">

.resource-table {
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

<table class="resource-table">
    <thead>
        <th>Resource</th>
        <th>Stockpile</th>
    </thead>
    <tr v-for="resInfo in resources">
        <td>{{resInfo.name}}</td>
        <td>{{resInfo.amount}}</td>
    </tr>
</table>

</template>

<script>

import resTypesConfig from '../gameConfig/resources';

export default {
    name: 'ResourceTable',
    props: ['city'],
    data() {
        return {
            resTypesConfig
        };
    },
    computed: {
        resources() {
            var warehouse = this.city.warehouse;
            var config = this.resTypesConfig;
            return _.map(warehouse, (amount, key) => {
                return {
                    name: config[key].name,
                    amount: amount
                };
            });
        }
    }
};

</script>