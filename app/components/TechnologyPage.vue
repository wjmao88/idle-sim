<template>

  <div>

    <md-toolbar>
      <h1 class="md-title" style="flex: 1">
        Technologies
      </h1>

      <router-link :to="{ name: 'availableTechs' }"
        class="md-button md-accent"
        active-class="md-raised">
        Available
      </router-link>

      <router-link :to="{ name: 'completedTechs' }"
        class="md-button md-accent"
        active-class="md-raised">
        Completed
      </router-link>

    </md-toolbar>

    <transition name="slide">
      <router-view></router-view>
    </transition>

  </div>

</template>


<script>

  import TechnologyCard from './TechnologyCard.vue';

  import { mapGetters } from 'vuex';

  export default {
    name: 'TechnologyPage',
    computed: {
      ...mapGetters(['availableTechsInfo'])
    },
    components: {
      TechnologyCard
    }
  };

</script>