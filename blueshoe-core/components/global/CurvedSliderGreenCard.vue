<template>
  <div
    ref="container"
    class="relative border-2 border-bs-green pl-[60px] py-[25px] bg-bs-green text-white max-w-[180px]"
  >
    <div :style="outerTriangleLeftStyle"></div>
    <div :style="innerTriangleLeftStyle"></div>
    <div :style="outerTriangleRightStyle"></div>
    <div class="test" :style="innerTriangleRightStyle"></div>
    <div
      class="flex items-center font-oswald font-bold"
      :class="[
        size === 'small'
          ? 'h-[296px] text-[20px] xl:text-[18px]'
          : 'h-[296px] xl:h-[346px] text-[20px]',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size: "full" | "small";
  zIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {});

const container = ref(null);

const outerTriangleLeftStyle = computed(() => {
  const height = container.value?.clientHeight || 0;
  return {
    position: "absolute",
    // right: `-${(height / 7.2) + 3}px`,
    top: "0",
    left: "0",
    bottom: "0",
    width: "0",
    height: "0",
    borderWidth: `${height / 2}px 0 ${height / 2}px ${height / 8.1}px`,
    borderColor: "transparent transparent transparent #63D9B6",
    borderStyle: "solid",
    zIndex: props.zIndex,
  };
});

const innerTriangleLeftStyle = computed(() => {
  const height = container.value?.clientHeight || 0;
  return {
    position: "absolute",
    // right: `-${(height / 7.2)}px`,
    left: "-2px",
    top: "0",
    bottom: "0",
    width: "0",
    height: "0",
    borderWidth: `${height / 2 - 1}px 0 ${height / 2 - 1}px ${height / 8.2}px`,
    borderColor: "transparent transparent transparent #fff",
    borderStyle: "solid",
    zIndex: props.zIndex,
  };
});

const outerTriangleRightStyle = computed(() => {
  const height = container.value?.clientHeight || 0;
  return {
    position: "absolute",
    right: `-${height / 8.3 + 3}px`,
    top: "0",
    bottom: "0",
    width: "0",
    height: "0",
    borderWidth: `${height / 2}px 0 ${height / 2}px ${height / 8.1}px`,
    borderColor: "transparent transparent transparent #63D9B6",
    borderStyle: "solid",
    zIndex: props.zIndex,
  };
});

const innerTriangleRightStyle = computed(() => {
  const height = container.value?.clientHeight || 0;
  return {
    position: "absolute",
    right: `-${height / 8.3}px`,
    top: "0",
    bottom: "0",
    width: "0",
    height: "0",
    borderWidth: `${height / 2 + 3}px 0 ${height / 2 - 1}px ${height / 8.2 - 2}px`,
    borderColor: "transparent transparent transparent #63D9B6",
    borderStyle: "solid",
    zIndex: props.zIndex,
  };
});
</script>

<style scoped></style>
