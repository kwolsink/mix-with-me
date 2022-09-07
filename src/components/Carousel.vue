<template>
    <div class=" h-screen flex flex-col">
        <div class="banner flex flex-row border-b-2 border-primary-color h-10 items-center justify-center pl-2 pr-2">
            <span class="middle font-semibold text-primary-color">
                Mix With Me
            </span>
        </div>
        <ProfileUI v-if="userProfile !== undefined" :user-profile="userProfile"></ProfileUI>

        <div class="footer mt-auto flex flex-row border-t-2 border-primary-color h-14 items-center justify-between">
            <span>prof</span>
            <span>car</span>
            <span>match</span>
        </div>
    </div>

</template>

<script lang="ts" setup>
import ProfileUI from './ProfileUI.vue';
import {ref} from 'vue'
import { onValue, ref as dbref } from '@firebase/database';
import firebase from '../firebaseconfig';
import store from '../store';

const userProfile = ref()
if (store.getCurrentUser() !== undefined) { // sync userProfile with the db value
    const userProfileRef = dbref(firebase.database, `/users/${store.getCurrentUser()?.uid}/profile`)
    onValue(userProfileRef, (snapshot) => {
        userProfile.value = snapshot.val()
    }, {onlyOnce: true})
}


</script>