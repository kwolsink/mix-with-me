<template>
    <div class="flex flex-col items-center h-full pt-5 pb-5">
        <h1 class="text-primary-color font-bold text-4xl mt-20">Mix With Me</h1>
        <p class="m-8 text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Dolores nemo enim, accusamus, quaerat recusandae dolor ut
             nulla sequi perspiciatis ipsam quo quasi obcaecati fugiat.
              Provident ea debitis quisquam maiores praesentium?
        </p>
        <div class="mt-auto mb-32 flex flex-col items-center w-full">
            <button @click="authenticatePopup()" class="p-2 m-3 w-10/12  text-white bg-primary-color rounded">Register</button>
            <button @click="authenticatePopup()" class="p-2 m-3 w-10/12 text-secondary-color rounded border-secondary-color border-2">Already have an account?</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {authenticateWithGoogle} from '../composables/authentication'
import firebase from '../firebaseconfig'
import {ref, get} from 'firebase/database'
import router from '../router'

const authenticatePopup = function() {
    authenticateWithGoogle().then((result) => {
        const user = result.user
        const dbRef = ref(firebase.database, `/users/${user.uid}/profile`)
        const profile = get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                router.push('dashboard')
            } else {
                router.push('configure')
            }
        })

    })
}
</script>