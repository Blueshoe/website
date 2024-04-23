<template>
  <div class="mb-6">
    <GlobalTitle size="lg" tag="h3" class="mb-6">
      {{ props.title }}
    </GlobalTitle>
    <GlobalBlock class="ul-disk">
      <ul>
        <li
          v-for="(heading, i) in blogHeading"
          :key="i"
          @click="scrollToElement(heading.id, 80)"
          class="cursor-pointer"
        >
          <a class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">{{
            heading.title
          }}</a>
        </li>
      </ul>
    </GlobalBlock>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';
import type { Heading } from '~/types';
import { scrollToElement } from '~/utils/scrollHelpers';

interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});

const generalStore = useGeneralStore();
const { blogHeading } = storeToRefs(generalStore);
</script>

<style scoped></style>
