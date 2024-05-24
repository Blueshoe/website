<template>
    <div v-if="content">
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
const { data } = await useAsyncData('page-data', () => queryContent(`/_partials/${props.content}`).findOne())

</script>
