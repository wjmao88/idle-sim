<style scoped lang="sass">

</style>

<template>

  <md-card v-md-theme="'default'">
    <md-card-header>
      <h2 class="md-title">
        {{factory.name}}
      </h2>

      <h3 class="md-subheading">
        Level {{factory.level}}
      </h3>
      <h3 class="md-subheading">
        {{factory.workerCount}}/{{factory.workerMax}} Workers
      </h3>
    </md-card-header>

    <md-card-area>
      <div class="md-button-group">
        <md-button v-on:click="increase()">
          <md-icon>add</md-icon>
        </md-button>
        <md-button v-on:click="decrease()">
          <md-icon>remove</md-icon>
        </md-button>
      </div>
    </md-card-area>
  </md-card>

</template>

<script>

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