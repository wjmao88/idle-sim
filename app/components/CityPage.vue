<style scoped lang="sass">

</style>

<template>

<div class="one-city">

  <md-toolbar>
    <h1 class="md-title" style="flex: 1">
      {{currentCity.name}}
    </h1>

    <router-link :to="{ name: 'consumptions' }"
      class="md-button md-accent"
      active-class="md-raised">
      Consumption
    </router-link>

    <router-link :to="{ name: 'productions' }"
      class="md-button md-accent"
      active-class="md-raised">
      Production
    </router-link>

  </md-toolbar>

  <transition name="slide">
    <router-view></router-view>
  </transition>
</div>

</template>

<script>

import { mapGetters } from 'vuex';

import ResourceTable from './ResourceTable.vue';

export default {
  name: 'CityPage',
  computed: {
    ...mapGetters([
      'currentCity'
    ]),
  }
};

</script>