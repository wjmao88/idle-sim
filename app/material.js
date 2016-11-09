import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.theme.registerAll({
    default: {
        primary: 'indigo',
        accent: 'light-blue'
    },
    tech: {
        primary: 'deep-purple',
        accent: 'yellow'
    },
    prod: {
        primary: 'brown',
        accent: 'amber'
    },
    consume: {
        primary: 'teal',
        accent: 'lime'
    }
});