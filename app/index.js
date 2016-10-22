
import Game from './services/Game';

import MainPage from './components/MainPage.vue';

import Vue from 'vue';

const app = new Vue({
    created() {
        this.game = new Game();
        this.game.load();
    },

    render(createElement) {
        return createElement(MainPage, {
            props: {
                game: this.game
            }
        });
    },

    components: {
        MainPage
    }
}).$mount('#app-container');