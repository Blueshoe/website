<template>
    <div :class="`flex flex-col gap-4 ${accented ? '' : 'mt-5'} hover:scale-105 duration-300 group`">
        <div class="group-hover:shadow-xl relative">
            <div v-if="accented" class="text-white bg-bs-blue uppercase absolute p-2 w-[300px] text-center">
                <template v-if="$slots.recommendedLabel">
                    <slot name="recommendedLabel" />
                </template>
                <template v-else>
                    recommended
                </template>
            </div>
            <div
                :class="`flex flex-col p-4 border-4 ${accented ? 'border-bs-blue min-h-[500px] w-[300px] pt-14' : 'border-bs-green'} gap-2 w-72`">
                <div class="text-2xl italic">
                    <slot name="title" />
                </div>
                <slot name="subtitle" />
                <div :class="`${accented ? 'accented' : ''} price-desc ml-4`">
                    <ContentSlot name="priceDescription" unwrap="div" />
                </div>
            </div>
            <div
                :class="`border-b-4 border-l-4 border-r-4 ${accented ? 'bg-bs-blue border-bs-blue w-[300px]' : 'bg-bs-green border-bs-green'}  text-white p-4 w-72`">
                <div class="text-2xl font-oswald">
                    <slot name="price" />
                </div>
            </div>
        </div>
        <slot name="additionals" />
    </div>
</template>

<script setup lang="ts">
interface Props {
    accented?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    accented: false,
});

</script>

<style>
.price-desc li {
    background-image: url("/img/checkmark.svg");
    padding-left: 30px;
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: left start;
    margin-bottom: 8px;
}

.price-desc.accented li {
    background-image: url("/img/checkmark-accented.svg");
}
</style>