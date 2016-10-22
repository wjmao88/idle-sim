
<template>

<div>
    <div class="debug">
        {{worldString}}

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

import World from '../actions/World';

import OneCity from './OneCity.vue';

export default {
    name: 'MainPage',
    props: ['game'],
    data() {
        return {
            world: this.game.world
        };
    },
    computed: {
        worldString() {
            return `World: ${this.world.cycles}`;
        }
    },
    methods: {
        resetWorld() {
            this.game.setWorld();
            this.world = this.game.world;
        }
    },
    components: {
        OneCity
    }
};

</script>