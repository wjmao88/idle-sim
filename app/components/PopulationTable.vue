<style scoped lang="sass">


</style>

<template>

  <table class="table">
    <thead>
      <th>Class</th>
      <th>Total</th>
      <th>Working</th>
      <th>Happiness</th>
      <th>Wage</th>
    </thead>
    <tr v-for="popInfo in population">
      <td>
        <span>{{popInfo.name}}</span>
      </td>
      <td class="td-number">
        <span>{{popInfo.total}}</span>
      </td>
      <td class="td-number">
        <span>{{popInfo.working}}</span>
      </td>
      <td class="td-number">
        <span>{{popInfo.happiness}}</span>
      </td>
      <td class="td-number">
        <span>{{popInfo.wage}}</span>
        <md-icon v-on:click="editModeOn[popInfo.key] = !editModeOn[popInfo.key]">
          edit
        </md-icon>
        <md-input-container class="popout-input"
          v-show="editModeOn[popInfo.key]">
          <md-input v-model="popInfo.wage"
            v-on:blur="wageUpdate(popInfo)">
          </md-input>
        </md-input-container>
      </td>
    </tr>
</table>

</template>

<script>


  import popTypesConfig from '../gameConfig/popTypes';

  export default {
    name: 'OneCity',
    props: ['city'],
    data() {
      return {
        popTypesConfig,
        editModeOn: {}
      };
    },
    computed: {
      population(){
        var city = this.city;
        return _.map(this.popTypesConfig, (config, key) => {
          var pop = city.population[key] || {};
          return {
            key: key,
            name: config.name,
            total: pop.total || 0,
            working: pop.working || 0,
            idle: pop.idle || 0,
            wage: pop.wage || 0,
            happiness: Math.round(pop.happiness * 100)/100 || 0
          };
        });
      }
    },
    methods: {
      wageUpdate(popInfo){
        return this.$store.dispatch('cityWageChange', {
          cityId: this.city.id,
          popType: popInfo.key,
          wage: popInfo.wage
        });
      }
    }
  };

</script>