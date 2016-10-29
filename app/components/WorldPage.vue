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

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WorldPage',
  computed: {
    ...mapGetters(['world', 'citiesInfo'])
  }
};

</script>