<style scoped lang="sass">

</style>

<template>

<div class="city-factories">

  <div class="responsive-table">
    <table>
      <thead>
        <th class="number"></th>
        <th class="number">Total</th>
        <th class="number"
          v-for="popInfo in cityPopulationInfo">
          {{ popInfo.key }}
        </th>
      </thead>
      <tbody>
        <tr>
          <td class="number">
            <span>Revenue</span>
          </td>
          <td class="number">
            <span>{{ moneyRow.revenue }}</span>
          </td>
          <td class="number"
            v-for="popVal in moneyRow.revenueByPop">
            <span>{{ popVal }}</span>
          </td>
        </tr>
        <tr>
          <td class="number">
            <span>Cost</span>
          </td>
          <td class="number">
            <span>{{ moneyRow.cost }}</span>
          </td>
          <td class="number"
            v-for="popVal in moneyRow.costByPop">
            <span>{{ popVal }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="responsive-table">
    <table>
      <thead>
        <th>Resource</th>
        <th class="number">Warehouse</th>
        <th class="number">Price</th>
        <th class="number">Stockpile</th>
        <th class="number">Production</th>
        <th class="number">Consumption</th>
        <th class="number"
          v-for="popInfo in cityPopulationInfo">
          {{ popInfo.key }}
        </th>
      </thead>
      <tbody>
        <tr v-for="resourceInfo in resourceTable">
          <td>
            <span>{{resourceInfo.key}}</span>
          </td>
          <td class="number">
            <span>{{resourceInfo.warehouse}}</span>
          </td>
          <td class="number">
            <input v-model="resourceInfo.price"
              v-on:blur="cityResourcePriceChange({
                resourceKey: resourceInfo.key,
                newPrice: resourceInfo.price
              })">
          </td>
          <td class="number">
            <span>{{resourceInfo.stockpile}}</span>
          </td>
          <td class="number">
            <span>{{resourceInfo.production}}</span>
          </td>
          <td class="number">
            <span>{{resourceInfo.consumption}}</span>
          </td>
          <td class="number"
            v-for="consumption in resourceInfo.population">
            <span>{{ consumption }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CityConsumptions',
  methods: {
    ...mapActions(['cityResourcePriceChange'])
  },
  computed: {
    ...mapGetters([
      'money',
      'currentCity',
      'populationConfig',
      'cityDemand',
      'cityDemandTotal',
      'cityWorkerWageByPop',
      'cityWorkerWageTotal',
      'cityDemandCost',
      'cityDemandCostTotal',
      'cityProductionCapacityTotal',
      'cityPopulationInfo']),

    moneyRow() {
      return {
        current: this.money,
        revenue: this.cityDemandCostTotal,
        revenueByPop: this.cityDemandCost,
        cost: this.cityWorkerWageTotal,
        costByPop: this.cityWorkerWageByPop
      };
    },

    resourceTable() {
      const city = this.currentCity;

      if (!city.id) { return []; }

      const popsConfig = this.populationConfig;
      const production = this.cityProductionCapacityTotal;
      const consumption = this.cityDemandTotal;
      const consumptionByPop = this.cityDemand;

      return _.map(city.warehouse, function(warehouse, key) {
        return {
          key,
          warehouse,
          stockpile: city.stockpile[key],
          price: city.prices[key],
          consumption: consumption[key],
          production: production[key],
          population: _.mapValues(popsConfig, (c, popKey) => {
            return consumptionByPop[popKey] &&
              consumptionByPop[popKey][key];
          })
        };
      });
    }
  }
};

</script>