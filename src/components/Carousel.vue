<template>
    <div class=" h-screen flex flex-col">
        <div class="banner flex flex-row border-b-2 border-primary-color h-10 items-center justify-center pl-2 pr-2">
            <span class="middle font-semibold text-primary-color">
                Mix With Me
            </span>
        </div>
        <OwnProfile></OwnProfile>

        <div class="footer mt-auto flex flex-row border-t-2 border-primary-color h-14 items-center justify-between">
            <span>prof</span>
            <span>car</span>
            <span>match</span>
        </div>
    </div>

</template>

<script lang="ts" setup>
import OwnProfile from './OwnProfile.vue';
import {ref} from 'vue'
import { onValue, ref as dbref } from '@firebase/database';
import firebase from '../firebaseconfig';

const userProfile = ref()


</script>