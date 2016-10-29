import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCityById']),
    city() {
      return this.getCityById(this.$route.params.cityId);
    }
  },
  methods: {
    ...mapActions(['cityExpandFactory']),
    buildFactory(factoryKey, factoryConfig) {
      return this.cityExpandFactory({
        cityId: this.city.id,
        factoryKey,
        factoryConfig
      });
    }
  },
};