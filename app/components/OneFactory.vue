
<template>

<article>
    <h1 class="factory" v-once="factory.typeName"></h1>

    <div class="">
        {{factory.name}} {{factory.cycles}}
    </div>
</article>

</template>

<script>

import Factory from '../actions/Factory';

export default {
    name: 'OneFactory',
    props: ['factory'],
    methods: {
        add() {
            return Factory.addFactory(this.factory);
        }
    },
    computed: {

    }
};

</script>