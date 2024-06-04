<template>
    <div class="relative w-6 h-6" @click="showTooltip = !showTooltip" @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false">
        <img src="/img/tooltip.svg" class="contain w-6 h-6" />
        <div v-if="showTooltip" class="absolute z-50 bg-black text-white text-xs w-[250px] right-0 p-2 rounded-lg">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const showTooltip = ref(false);

</script>