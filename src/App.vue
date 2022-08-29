<script lang="ts" setup>
import WelcomePage from './components/WelcomePage.vue';
</script>

<template>
    <div id="view">
        <router-view></router-view>>
    </div>
</template>

<style scoped>
#view {
    height: 100vh;
    min-height: 100vh;
}
</style>