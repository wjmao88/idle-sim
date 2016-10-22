import Vue from 'vue';

import MainPage from './components/MainPage.vue';

import store from './store';

const app = new Vue({
    store,

    created() {
        this.$store.dispatch('loadGame');
    },

    render(createElement) {
        return createElement(MainPage);
    },

    components: {
        MainPage
    }
}).$mount('#app-container');