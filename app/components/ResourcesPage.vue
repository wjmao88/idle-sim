<style scoped lang="sass">


</style>

<template>

  <md-whiteframe md-elevation="10">
    <table class="table">
      <tr v-for="resInfo in resources">
        <td>{{resInfo.name}}</td>
        <td class="td-number">{{resInfo.amount}}</td>
      </tr>
    </table>
  </md-whiteframe>

</template>

<script>

  import resTypesConfig from '../gameConfig/resources';

  export default {
    name: 'ResourceTable',
    props: ['city'],
    data() {
      return {
        resTypesConfig
      };
    },
    computed: {
      resources() {
        var warehouse = this.city.warehouse;
        var config = this.resTypesConfig;
        return _.map(warehouse, (amount, key) => {
          return {
            name: config[key].name,
            amount: amount
          };
        });
      }
    }
  };

</script>