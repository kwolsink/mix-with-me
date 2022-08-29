<template>
    <div class="min-h-full flex flex-col">
        <form class="m-5 pt-64">
            <div v-if="formProgress === 0" class="field flex flex-col justify-start">
                <label class="question">What is your artist name?</label>
                <input class="answer-text text-xl" type="text" />
            </div>
            <div v-if="formProgress === 1" class="field">
                <label class="question"> What type of musician are you?</label>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="producer"/> 
                    <label class="checkbox-text" for="producer">Producer</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="singer" />
                    <label class="checkbox-text" for="singer">Singer</label>
                </div>
                <div class="checkbox-container">  
                    <input class="answer-checkbox" type="checkbox" id="rapper" />
                    <label class="checkbox-text" for="rapper">Rapper</label>  
                </div>
                <div class="checkbox-container">    
                    <input class="answer-checkbox" type="checkbox" id="instrument" />
                    <label class="checkbox-text" for="instrument">I play an instrument</label>
                </div>
            </div>
            <div v-if="formProgress === 2" class="field flex flex-col">
                <label class="question">Which DAW(s) are you experienced with?</label>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" id="fl-studio" />
                    <label for="fl-studio" class="checkbox-text">FL Studio</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" value="ableton-live" />
                    <label for="ableton-live" class="checkbox-text">Ableton Live</label>
                </div>
                <div class="checkbox-container">
                    <input class="answer-checkbox" type="checkbox" value="logic-pro" />
                    <label for="logic-pro" class="checkbox-text">Logic Pro</label>
                </div>
            </div>
        </form>
        <div class="flex flex-row justify-between mt-auto mb-5">
            <button :disabled="formProgress === 0" class="back-button m-2 pl-5 pr-5 w-4/12 border-secondary-color border-2 text-secondary-color rounded-full text-xl" @click="goBack()">Go back</button>
            <button class="m-2 pl-5 pr-5 w-4/12 bg-primary-color text-white rounded-full text-xl" @click="goNext()">{{formProgress >= amountOfQuestions ? `Submit` : 'Next'}}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const amountOfQuestions = 2
const formProgress = ref(0)



const goNext = function() {
    if (formProgress.value >= amountOfQuestions) {
        return
    }
    formProgress.value += 1
}

const goBack = function() {
    if (formProgress.value > 0) {
        formProgress.value --
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