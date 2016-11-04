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
          {{ popInfo.name }}
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
          {{ popInfo.name }}
        </th>
      </thead>
      <tbody>
        <tr v-for="resoruceInfo in resourceTable">
          <td>
            <span>{{resoruceInfo.name}}</span>
          </td>
          <td class="number">
            <span>{{resoruceInfo.warehouse}}</span>
          </td>
          <td class="number">
            <span>{{resoruceInfo.price}}</span>
          </td>
          <td class="number">
            <span>{{resoruceInfo.stockpile}}</span>
          </td>
          <td class="number">
            <span>{{resoruceInfo.production}}</span>
          </td>
          <td class="number">
            <span>{{resoruceInfo.consumption}}</span>
          </td>
          <td class="number"
            v-for="consumption in resoruceInfo.population">
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
  computed: {
    ...mapGetters([
      'money',
      'currentCity',
      'populationConfig',
      'resourcesConfig',
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

      return _.map(this.resourcesConfig, function(config, resKey) {
        return {
          name: config.name,
          warehouse: city.warehouse[resKey],
          stockpile: city.stockpile[resKey],
          price: city.prices[resKey],
          consumption: consumption[resKey],
          production: production[resKey],
          population: _.mapValues(popsConfig, (c, popKey) => {
            return consumptionByPop[popKey] &&
              consumptionByPop[popKey][resKey];
          })
        };
      });
    }
  }
};

</script>