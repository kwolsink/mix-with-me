<template>
    <div class="tag" :class="[tagStyle]">
        {{tagText}}
    </div>
</template>

<script lang="ts" setup>

defineProps({
    tagText: {
        required: true,
        type: String
    },
    tagStyle: {
        required: false,
        type: String,
        default: 'tag-boring'
    }
})

</script>

<style scoped>

.tag {
    @apply rounded-full pl-2 pr-2 pt-0.5 pb-0.5 text-xs shadow-gray-400 shadow-sm
}

.tag-boring {
    @apply bg-gray-400 text-gray-100 
}
.tag-style-1{
    @apply bg-red-700 text-yellow-400
}

.tag-style-2 {
    @apply bg-green-500 text-red-600
}

.tag-style-3 {
    @apply bg-teal-400 text-purple-600
}

</style>