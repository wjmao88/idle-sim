<style scoped lang="sass">
.md-button-group {
  align-items: center;
}
</style>

<template>

<md-toolbar v-md-theme="'default'">

  <span class="md-primary">
    Money: {{world.money}}
  </span>

  <md-button class="md-accent"
    href="#/world">
    World
  </md-button>

  <md-button class="md-accent"
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