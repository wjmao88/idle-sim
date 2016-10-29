
<template>

<div class="app-root" v-md-theme="'default'">
    <router-view></router-view>
</div>

</template>

<script>

export default {
    name: 'App',
    created() {
        this.$store.dispatch('loadGame');
    }
};

</script>