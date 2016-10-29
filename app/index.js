
import Vue from 'vue';

import store from './store';

import router from './router';

import { sync } from 'vuex-router-sync';

import App from './App.vue';

import './material';

sync(store, router);

const app = new Vue({
    store,

    router,

    render(createElement) {
        return createElement(App);
    },

    components: {
        App
    }
}).$mount('#app-container');
