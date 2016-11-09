<template>

  <div>
    <h1>Completed Technologies</h1>

    <div class="cards-container">
      <technology-card
        v-for="tech in completedTechsInfo"
        :key="tech.key"
        :disabled="true"
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
      ...mapGetters(['completedTechsInfo'])
    },
    components: {
      TechnologyCard
    }
  };

</script>