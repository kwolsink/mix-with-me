<template>
    <div class="flex flex-col p-5 h-screen justify-center">
        <h1 class=" text-red-800 text-4xl font-semibold mb-2">
            {{userProfile.artistName}}
        </h1>
        <div class="tags flex flex-row mb-2"> 
            <Tag v-if="userProfile.skills.producer" tag-text="Producer" tag-style="tag-style-1"></Tag>
            <Tag v-if="userProfile.skills.singer" tag-text="Singer" tag-style="tag-style-2"></Tag>
            <Tag v-if="userProfile.skills.rapper" tag-text="Rapper" tag-style="tag-style-3"></Tag>
        </div>
        <p class=" text-gray-500 mb-2">
            {{userProfile.bio.length === 0 ? 'This user has no biography' : userProfile.bio}}
        </p>
        <div v-if="userProfile.lookingFor.length > 0" class="looking-for">
            <h3 class="text-red-800 text-2xl font-semibold">I am looking for:</h3>
            <p class="text-gray-500 mb-2">
                {{userProfile.lookingFor}}
            </p>
        </div>
        <div v-if="userProfile.skills.producer" class="flex flex-col producer-tags mb-2">
            <h3 class="text-red-800 text-2xl font-semibold">I use the following DAW(s):</h3>
            <div class="tag-container flex flex-row">  
                <Tag v-if="userProfile.producerSkills.abletonLive" tag-text="Ableton"></Tag>
                <Tag v-if="userProfile.producerSkills.flStudio" tag-text="FL Studio"></Tag>
                <Tag v-if="userProfile.producerSkills.logicPro" tag-text="Logic Pro"></Tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Profile from '../interfaces/Profile';
import Tag from './Tag.vue';

defineProps({
    userProfile: {
        required: true,
        type: Object as PropType<Profile>
    }
})



</script>