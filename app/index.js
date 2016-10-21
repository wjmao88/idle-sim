import World from './models/World';

import MainPage from './components/mainPage.vue';

import Vue from 'vue';

(function(){
  const app = new Vue({

    render(createElement) {
        return createElement(MainPage, {
            props: {
                world: this.world
            }
        });
    },

    mounted() {
        this.world = new World();

        this.tickWorld();
    },

    methods: {
        tickWorld(){
            this.world.cycle();
            if (this.shouldTickWorld()) {
                window.setTimeout(() => this.tickWorld(), 3000);
            }
        },
        shouldTickWorld(){
            return true;
        }
    },

    components: {
        MainPage
    }
  }).$mount('#app-container');
})();