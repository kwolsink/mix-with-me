<template>
    <div>
        hey!
        {{store.getCurrentUser()?.displayName}}
    </div>
</template>

<script setup lang="ts">
import store from '../store'

</script>