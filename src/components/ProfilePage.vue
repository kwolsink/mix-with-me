<template>
    <div class="flex flex-col items-center">
        <template v-if="!editMode">
            <ProfileUI :user-profile="userProfile"></ProfileUI>
            <button @click="editMode = true" class=" bg-secondary-color text-gray-200 rounded-full pl-5 pr-5 pt-0.5 pb-0.5 w-6/12 mt-5">Edit your profile</button>
        </template>
        <template v-if="editMode">
            <EditProfileUI :user-profile="userProfile"></EditProfileUI>
            <button @click="editMode = false" class=" bg-orange-400 text-gray-200 rounded-full pl-5 pr-5 pt-0.5 pb-0.5 w-6/12 mt-5">Save</button>
        </template>

    </div>
</template>

<script setup lang="ts">import { PropType, ref } from 'vue';
import Profile from '../interfaces/Profile';
import ProfileUI from './ProfileUI.vue';
import EditProfileUI from './EditProfileUI.vue';

defineProps({
    userProfile: {
        required: true,
        type: Object as PropType<Profile>
    }
})

const editMode = ref(false)

</script>