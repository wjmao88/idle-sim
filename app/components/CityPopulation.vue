<style scoped lang="sass">

.right-align input {
  text-align: right;
}

</style>

<template>

<div class="city-factories">
  <table class="table">
    <thead>
      <th>Class</th>
      <th>Total</th>
      <th>Working</th>
      <th>Happiness</th>
      <th>Wage</th>
    </thead>
    <tr v-for="popInfo in cityPopulation">
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
        <span>
          <md-input-container class="right-align">
            <md-input v-model="popInfo.wage"
              v-on:blur="wageUpdate(popInfo)">
            </md-input>
          </md-input-container>
        </span>
      </td>
    </tr>
  </table>
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CityFactories',
  computed: {
    ...mapGetters(['cityPopulation'])
  },
  data() {
    return { editModeOn: {} };
  },
  methods: {
    wageUpdate(popInfo){
      return this.$store.dispatch('cityWageChange', {
        cityId: popInfo.cityId,
        popType: popInfo.key,
        wage: popInfo.wage
      });
    },
    toggleEditMode(key) {
      this.editModeOn[key] = !this.editModeOn[key];
    }
  }
};

</script>