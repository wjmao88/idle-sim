import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.theme.registerAll({
    default: {
        primary: 'indigo',
        accent: 'amber'
    }
});