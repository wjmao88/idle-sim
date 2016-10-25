
<template>

<div>
    <div class="debug">
        Money: {{world.money}}

        <button v-on:click="cycleWorld(1)">cycle 1</button>
        <button v-on:click="cycleWorld(10)">cycle 10</button>
        <button v-on:click="cycleWorld(100)">cycle 100</button>
        <button v-on:click="resetAndSave()">reset</button>
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
    data() {
        return {
            cyclesLeft: 0
        };
    },
    computed: {
        ...mapGetters(['world'])
    },
    methods: {
        ...mapActions(['resetWorld', 'saveGame']),
        resetAndSave() {
            this.resetWorld();
            this.saveGame();
        },

        cycleWorld(number) {
            if (this.cyclesLeft > 0){
                this.cyclesLeft += number;
            } else {
                this.cyclesLeft = number;
                this.doCycleWorld();
            }
        },

        doCycleWorld() {
            if (this.cyclesLeft <= 0) {
                this.saveGame();
                return;
            }

            this.$store.commit('cycleWorld');

            if (this.world.cycles%10 === 1) {
                this.saveGame();
            }

            this.cyclesLeft -= 1;

            window.setTimeout(() => {
                this.doCycleWorld();
            }, 1000);
        }
    },
    components: {
        OneCity
    }
};

</script>