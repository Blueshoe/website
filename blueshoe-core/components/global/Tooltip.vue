<template>
    <div class="relative w-6 h-6" @click="showTooltip = !showTooltip" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
        </svg>
        <div v-if="showTooltip"
            class="absolute z-50 bg-black text-white text-xs w-[250px] right-0 p-2 rounded-lg">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const showTooltip = ref(false);

</script>