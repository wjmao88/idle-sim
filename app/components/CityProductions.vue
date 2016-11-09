<style scoped lang="sass">

</style>

<template>

<div class="cards-container">
  <factory-card
    v-for="factory in cityFactoriesInfo"
    :key="factory.key"
    :factory="factory">
  </factory-card>
</div>

</template>

<script>

import _ from 'lodash';

import { mapGetters, mapActions } from 'vuex';

import FactoryCard from './FactoryCard.vue';

export default {
  name: 'CityProductions',
  computed: {
    ...mapGetters([
      'cityFactoriesInfo'
    ])
  },
  components: {
    FactoryCard
  }
};

</script>