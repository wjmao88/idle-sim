<style scoped lang="sass">

</style>

<template>

<div>

  <md-card
    v-for="city in citiesInfo"
    :key="city.id">

    <md-card-header>
      <h2 class="md-title">
        {{city.name}} {{city.id}}
      </h2>

      <h3 class="md-subheading">
        Population: {{city.population}}
      </h3>
    </md-card-header>

    <md-card-actions>
      <router-link
        :to="{
          name: 'city',
          params: { cityId: city.id }
        }">
        Enter City
      </router-link>
    </md-card-actions>
  </md-card>

  <router-view></router-view>
</div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'CityCard',
  computed: {
    ...mapGetters(['world', 'citiesInfo'])
  },
  methods: {
    ...mapActions(['cityExpandFactory']),
    buildFactory(factory) {
      return this.cityExpandFactory({
        cityId: factory.cityId,
        factoryKey: factory.key
      });
    }
  }
};

</script>