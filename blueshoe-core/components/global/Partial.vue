<template>
    <div>
        <ContentRenderer :value="data">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </div>
</template>

<script setup lang="ts">


const props = defineProps({
    content: {
        default: "default"
    }

});
const arg = ref(props.content);
const { data } = await useAsyncData(arg.value, () => queryContent('_partials/' + arg.value).where({ _partial: true }).findOne());


</script>