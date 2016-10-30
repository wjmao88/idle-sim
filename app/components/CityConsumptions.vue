<style scoped lang="sass">

</style>

<template>

<div class="city-factories">
  <div class="responsive-table">
    <table>
      <thead>
        <th>Resource</th>
        <th class="number">Warehouse</th>
        <th class="number">Price</th>
        <th class="number">Stockpile</th>
        <th class="number">Consumption</th>
        <th class="number"
          v-for="popInfo in cityPopulationInfo">
          {{ popInfo.name }}
        </th>
      </thead>
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
          <span>{{resoruceInfo.consumption}}</span>
        </td>
        <td class="number"
          v-for="consumption in resoruceInfo.population">
          <span>{{ consumption }}</span>
        </td>
      </tr>
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
      'currentCity',
      'resourcesConfig',
      'populationConfig',
      'cityPopulationInfo']),

    resourceTable() {
      const city = this.currentCity;
      const popsConfig = this.populationConfig;
      return _.map(this.resourcesConfig, function(config, resKey) {
        const popConsumption = _.mapValues(city.population, (popInfo, popKey) =>  {
          return popsConfig[popKey].consumption[resKey];
        });

        return {
          name: config.name,
          warehouse: city.warehouse[resKey],
          stockpile: city.stockpile[resKey],
          price: city.prices[resKey],
          consumption: _.sum(_.values(popConsumption)),
          population: popConsumption
        };
      });
    }
  }
};

</script>