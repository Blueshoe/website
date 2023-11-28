<template>
  <div
    class="relative"
    :style="{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left top',
      height: `${heightCard + 80}px`
    }"
  >
    <div class="absolute inset-0 bs-container py-10 px-8">
      <ClientOnly>
        <div ref="refCard" class="bg-white bg-opacity-90 border-4 border-bs-blue mx-auto p-6" :class="width">
          <slot />
          <div v-if="isButton" class="mt-6">
            <slot name="button" />
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
type Width = 'w-full' | 'w-2/3';
interface Props {
  src: string;
  width?: Width;
  isButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-full',
  isButton: false
});

const refCard = ref<HTMLElement | null>(null);
const heightCard = ref(0);

function getHeightBlock() {
  heightCard.value = refCard.value?.offsetHeight || 0;
}

onMounted(async () => {
  await nextTick();
  window.addEventListener('resize', getHeightBlock);
  heightCard.value = refCard.value?.offsetHeight || 0;
});
</script>

<style scoped></style>
