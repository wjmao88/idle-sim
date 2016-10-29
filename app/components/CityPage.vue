<style scoped lang="sass">

</style>

<template>

<div class="one-city">

  <md-toolbar>
    <h1 class="md-title" style="flex: 1">
      {{city.name}}
    </h1>

    <router-link :to="{ name: 'population' }"
      class="md-button md-accent"
      active-class="md-raised">
      Population
    </router-link>

    <router-link :to="{ name: 'factories' }"
      class="md-button md-accent"
      active-class="md-raised">
      Factories
    </router-link>

  </md-toolbar>

  <resource-table :city="city"></resource-table>

  <transition name="slide">
    <router-view></router-view>
  </transition>
</div>

</template>

<script>

import { mapGetters } from 'vuex';

import ResourceTable from './ResourceTable.vue';

export default {
  name: 'OneCity',
  computed: {
    ...mapGetters(['city', 'params']),
  },
  components: {
    ResourceTable
  }
};

</script>