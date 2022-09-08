<template>
    <form>
        <div>
            <label>Artist name:</label>
            <input type="text" />
        </div>
        <div>
            <label>Bio:</label>
            <textarea></textarea>
        </div>
        <div>
            <label></label>
        </div>
    </form>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Profile from '../interfaces/Profile';

defineProps({
    userProfile: {
        required: true,
        type: Object as PropType<Profile>
    }
})
</script>