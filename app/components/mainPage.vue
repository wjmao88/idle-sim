<style scoped lang="sass">

</style>

<template>

<div class="main-page" v-md-theme="theme">
  <div class="md-button-group">
    <md-button v-on:click="cycleWorld(1)">cycle 1</md-button>
    <md-button v-on:click="cycleWorld(10)">cycle 10</md-button>
    <md-button v-on:click="cycleWorld(100)">cycle 100</md-button>
    <md-button v-on:click="resetWorld()">reset</md-button>
  </div>

  <main-nav-bar></main-nav-bar>

  <router-view></router-view>

  <main-footer></main-footer>
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import MainNavBar from './MainNavBar.vue';
import MainFooter from './MainFooter.vue';

export default {
  name: 'MainPage',
  data() {
      return {
          cyclesLeft: 0
      };
  },
  computed: {
    ...mapGetters(['world', 'theme'])
  },
  methods: {
    ...mapActions(['resetWorld']),

    cycleWorld(number) {
      if (this.cyclesLeft > 0){
        this.cyclesLeft += number;
      } else {
        this.cyclesLeft = number;
        this.doCycleWorld();
      }
    },

    doCycleWorld() {
      this.$store.dispatch('cycleWorld');

      this.cyclesLeft -= 1;

      if (this.cyclesLeft > 0) {
        window.setTimeout(() => {
          this.doCycleWorld();
        }, 1000);
      }

    }
  },
  components: {
    MainNavBar,
    MainFooter
  }
};

</script>