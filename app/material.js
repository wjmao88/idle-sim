import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.theme.registerAll({
    default: {
        primary: 'grey',
        accent: 'orange'
    },
    tech: {
        primary: 'purple',
        accent: 'yellow'
    },
    prod: {
        primary: 'brown',
        accent: 'amber'
    }
});