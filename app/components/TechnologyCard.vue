<template>

  <md-card>
    <md-card-header>
      <h2 class="md-title">
        {{tech.key}}
      </h2>

      <h3 class="md-subheading">
        Cost: {{tech.cost}}
      </h3>
    </md-card-header>

    <md-card-content>
      <div>Unlocks</div>
      <div v-for="key in tech.unlockTechs">
        {{key}}
      </div>

      <div v-for="key in tech.unlockFactories">
        {{key}}
      </div>

      <div v-for="key in tech.unlockResources">
        {{key}}
      </div>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-raised md-primary"
        v-if="!disabled"
        v-on:click="upgradeTech({ techKey: tech.key })">
        <md-icon>add</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>


</template>


<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'TechnologyCard',
    props: ['tech', 'disabled'],
    methods: {
      ...mapActions(['upgradeTech'])

    }
  };

</script>