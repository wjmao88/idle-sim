<style scoped lang="sass">

.city-factories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>

<template>

<div class="city-factories">
  <factory-card
    v-for="factory in cityFactoriesInfo"
    :key="factory.key"
    :factory="factory">
  </factory-card>
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import FactoryCard from './FactoryCard.vue';
import PopulationTable from './PopulationTable.vue';
import ResourceTable from './ResourceTable.vue';

export default {
  name: 'CityProductions',
  computed: {
    ...mapGetters(['cityFactoriesInfo'])
  },
  components: {
    FactoryCard
  }
};

</script>