<template>
    <div class="min-h-full flex flex-col">
        <form class="m-5 pt-64">
            <div v-if="formProgress === 0" class="field flex flex-col justify-start">
                <label class="question">What is your artist name?</label>
                <input class="answer-text text-xl" type="text" v-model="profile.artistName"/>
            </div>
            <div v-if="formProgress === 1" class="field">
                <label class="question"> What type of musician are you?</label>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="producer" v-model="profile.skills.producer"/> 
                    <label class="checkbox-text" for="producer">Producer</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="singer" v-model="profile.skills.singer" />
                    <label class="checkbox-text" for="singer">Singer</label>
                </div>
                <div class="checkbox-container">  
                    <input class="answer-checkbox" type="checkbox" id="rapper" v-model="profile.skills.rapper"/>
                    <label class="checkbox-text" for="rapper">Rapper</label>  
                </div>
            </div>
            <div v-if="formProgress === 2" class="field flex flex-col">
                <label class="question">Which DAW(s) are you experienced with?</label>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="fl-studio" v-model="profile.producerSkills.flStudio"/>
                    <label for="fl-studio" class="checkbox-text">FL Studio</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" value="ableton-live" v-model="profile.producerSkills.abletonLive"/>
                    <label for="ableton-live" class="checkbox-text">Ableton Live</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" value="logic-pro" v-model="profile.producerSkills.logicPro" />
                    <label for="logic-pro" class="checkbox-text">Logic Pro</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" value="none" />
                    <label for="none" class="checkbox-text">None</label>
                </div>
            </div>
        </form>
        <div class="flex flex-row justify-between mt-auto mb-5">
            <button :disabled="formProgress === 0" class="back-button m-2 pl-5 pr-5 w-4/12 border-secondary-color border-2 text-secondary-color rounded-full text-xl" @click="goBack()">Go Back</button>
            <button :disabled="!canGoNext()" class="m-2 pl-5 pr-5 w-4/12 bg-primary-color text-white rounded-full text-xl disabled:bg-gray-300" @click="goNext()">{{formProgress >= amountOfQuestions ? `Submit` : 'Next'}}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { saveProfile } from '../composables/profile_model'
import { getAuthStateManager} from '../composables/auth_state_manager'
import Profile from '../interfaces/Profile'
import { User } from '@firebase/auth';

const amountOfQuestions = 2
const formProgress = ref(0)
const authStateManager = getAuthStateManager()

/**
 * These object fields are two way bounded with the form inputs
 */
const profile : Profile = reactive({
    artistName: '',
    bio: '',
    lookingFor: '',
    skills: {
        producer: false,
        singer: false,
        rapper: false
    },
    producerSkills: {
        flStudio: false,
        abletonLive: false,
        logicPro: false
    }
})

/**
 * Handles the next button of the form
 */
const goNext = function() {
    if (formProgress.value >= amountOfQuestions) {  // checks if we are at the last step of the form
        if (authStateManager.getCurrentUser() != null) {
            saveProfile(authStateManager.getCurrentUser() as User, profile).then(() => {console.log("profile saved")})
        }
        return;
    }
    formProgress.value += 1
}

/**
 * Handles the back button of the form
 */
const goBack = function() {
    if (formProgress.value > 0) {
        formProgress.value --
    }
}

const canGoNext = function() : boolean {
    switch (formProgress.value) {
        case 0:
            return profile.artistName.length >= 2
        default:
            return true 
    }
}

</script>

<style scoped>
.question {
    @apply text-4xl font-bold text-primary-color mb-5
}

.answer-text {
    @apply w-6/12 border-secondary-color border-2 rounded font-semibold text-primary-color
}

.answer-checkbox {
    @apply m-2
}

.checkbox-text {
    @apply font-semibold text-primary-color text-lg
}

.checkbox-container {
    @apply mt-3 mb-3
}

.back-button:disabled {
    @apply border-gray-200 text-gray-200
}

</style>