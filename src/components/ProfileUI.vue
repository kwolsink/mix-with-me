<template>
    <div class="flex flex-col p-5 h-screen justify-center">
        <h1 class=" text-red-800 text-4xl font-semibold mb-2">
            {{userProfile.artistName}}
        </h1>
        <p class=" text-gray-500">
            {{userProfile.bio.length === 0 ? 'This user has no biography' : userProfile.bio}}
        </p>
        <div class="tags flex flex-row"> 
            <Tag tag-text="Producer" tag-style="tag-style-1"></Tag>
        </div>
        


    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Profile from '../interfaces/Profile';
import store from '../store'
import Tag from './Tag.vue';

defineProps({
    userProfile: {
        required: true,
        type: Object as PropType<Profile>
    }
})



</script>