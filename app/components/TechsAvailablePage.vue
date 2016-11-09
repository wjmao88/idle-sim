<template>

  <div>
    <h1>Available Technologies</h1>

    <div class="cards-container">
      <technology-card
        v-for="tech in availableTechsInfo"
        :key="tech.key"
        :tech="tech">
      </technology-card>
    </div>
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