<template>
  <div>
    <ul>
      <li v-for="(heading, i) in headings">{{ heading.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headings?: object[];
}

const props = withDefaults(defineProps<Props>(), {});
console.log('props', props.headings);
</script>

<style scoped></style>
