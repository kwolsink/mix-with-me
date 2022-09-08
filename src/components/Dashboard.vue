<template>
    <div class="banner fixed top-0 left-0 w-screen flex flex-row border-b-2 border-primary-color h-10 items-center justify-center pl-2 pr-2 bg-primary-color">
        <span class="middle font-semibold text-white">
            Mix With Me
        </span>
    </div>

    <div class="flex flex-col h-screen justify-center">
        <ProfileUI v-if="curPage === 'profile' && userProfile !== undefined" :user-profile="userProfile"></ProfileUI>
        <Carousel v-if="curPage === 'carousel'"></Carousel>
    </div>

    <div class="footer fixed bottom-0 left-0 w-screen mt-auto flex flex-row border-t-2 border-primary-color h-14 items-center justify-between">
            <span @click="curPage = 'profile'">prof</span>
            <span @click="curPage = 'carousel'">car</span>
            <span @click="curPage = 'matches'">match</span>
    </div>

</template>

<script lang="ts" setup>
import ProfileUI from './ProfileUI.vue';
import { Ref, ref } from 'vue'
import { onValue, ref as dbref } from '@firebase/database';
import firebase from '../firebaseconfig';
import store from '../store';
import Carousel from './Carousel.vue';

type page = "profile" | "carousel" | "matches"
const curPage : Ref<page> = ref("carousel")

const userProfile = ref()
if (store.getCurrentUser() !== undefined) { // sync userProfile with the db value
    const userProfileRef = dbref(firebase.database, `/users/${store.getCurrentUser()?.uid}/profile`)
    onValue(userProfileRef, (snapshot) => {
        userProfile.value = snapshot.val()
    }, { onlyOnce: true })
}


</script>