<style scoped lang="sass">
.md-button-group {
  align-items: center;
}
</style>

<template>

<md-toolbar>

  <span class="md-primary">
    Money: {{world.money}}
  </span>

  <md-button class="md-accent"
    href="#/world">
    World
  </md-button>

  <md-button class="md-accent"
    href="#/research">
    Research
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