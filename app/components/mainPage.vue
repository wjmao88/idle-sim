
<template>

<div>
    <div class="debug">
        {{world.cycle}}

        <button v-on:click="resetWorld()">reset</button>
    </div>

    <one-city
        v-for="city in world.cities"
        :key="city.id"
        v-bind:city="city">
    </one-city>
</div>

</template>

<script>

import OneCity from './OneCity.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MainPage',
    computed: {
        ...mapGetters(['world'])
    },
    methods: {
        ...mapActions(['resetWorld', 'saveGame']),

        cycleWorld(argument) {
            this.$store.commit('cycleWorld');

            if (this.world.cycles%10 === 1) {
                this.saveGame();
            }

            window.setTimeout(() => {
                this.cycleWorld();
            }, 1000);
        }
    },
    mounted() {
        this.cycleWorld();
    },
    components: {
        OneCity
    }
};

</script>