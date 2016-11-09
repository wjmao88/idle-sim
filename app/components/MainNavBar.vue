<style scoped lang="sass">

</style>

<template>

<md-toolbar>

  <span class="md-primary">
    Money: {{world.money}}
  </span>

  <md-button class="md-raised"
    href="#/world">
    World
  </md-button>

  <md-button class="md-raised"
    href="#/technology">
    Technology
  </md-button>

</md-toolbar>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'MainNavBar',
  computed: {
    ...mapGetters(['world'])
  }
};

</script>