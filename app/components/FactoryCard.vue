<style scoped lang="sass">

</style>

<template>

  <md-card v-md-theme="'prod'">
    <md-card-header>
      <h2 class="md-title">
        {{factory.key}} - L{{factory.level}}
      </h2>

      <h3 class="md-subheading">
        {{factory.workerCount}}/{{factory.workerMax}} Workers, Cost {{factory.wage}}
      </h3>
    </md-card-header>

    <md-card-content>
      <div v-if="factory.hasInput">Input</div>
      <div v-for="(amount, key) in factory.inputTotal">
        {{key}}: {{amount}}
      </div>

      <div v-if="factory.hasOutput">Output</div>
      <div v-for="(amount, key) in factory.outputTotal">
        {{key}}: {{amount}}
      </div>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-raised md-primary"
        v-on:click="increase()">
        <md-icon>add</md-icon>
      </md-button>
      <md-button class="md-raised md-primary"
        v-on:click="decrease()">
        <md-icon>remove</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>

</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    name: 'OneFactory',
    props: ['factory'],
    methods: {
      increase() {
        this.changeWorkerAmount(1);
      },
      decrease() {
        this.changeWorkerAmount(-1);
      },
      changeWorkerAmount(changeAmount) {
        this.$store.dispatch('moveWorkersToFactory', {
          factoryKey: this.factory.key,
          changeAmount
        });
      }
    }
  };

</script>