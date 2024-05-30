<template>
  <div
    class="relative border-t-2 border-b-2 py-[25px]"
    :class="[
      firstCard ? 'pl-[40px] border-l-2' : 'pl-[53px] xl:pl-[58px]',
      `z-[${zIndex}]`,
      size === 'small' ? 'h-[350px]' : 'h-[350px] xl:h-[400px]',
    ]"
    :style="{
      borderStyle: borderStyle,
      borderColor: borderColor,
      'z-index': zIndex,
    }"
  >
    <div
      v-if="!firstCard"
      class="h-[1px] border-t-2 absolute rotate-[76deg]"
      :class="[
        size === 'small'
          ? 'w-[180px] top-[86px] left-[-67px]'
          : 'w-[180px] xl:w-[206px] top-[86px] left-[-67px] xl:top-[98px] xl:left-[-77px] ',
      ]"
      :style="{
        borderStyle: borderStyle,
        borderColor: borderColor,
        zIndex: zIndex,
      }"
    />
    <div
      v-if="!firstCard"
      class="h-[1px] border-t-2 absolute rotate-[-76deg]"
      :class="[
        size === 'small'
          ? 'w-[180px] bottom-[86px] left-[-67px]'
          : 'w-[180px] xl:w-[206px] bottom-[86px] left-[-67px] xl:bottom-[97px] xl:left-[-77px] ',
      ]"
      :style="{
        borderStyle: borderStyle,
        borderColor: borderColor,
        zIndex: zIndex,
      }"
    />
    <div
      class="h-[1px] border-t-2 absolute rotate-[76deg]"
      :class="[
        size === 'small'
          ? 'w-[180px] top-[85px] right-[-111px]'
          : 'w-[180px] xl:w-[206px] top-[85px] right-[-111px] xl:top-[99px] xl:right-[-127px] ',
      ]"
      :style="{
        borderStyle: borderStyle,
        borderColor: borderColor,
        zIndex: zIndex,
      }"
    />
    <div
      class="h-[1px] border-t-2 absolute rotate-[-76deg]"
      :class="[
        size === 'small'
          ? 'w-[180px] bottom-[85px] right-[-111px]'
          : 'w-[180px] xl:w-[206px] bottom-[85px] right-[-111px] xl:bottom-[99px] xl:right-[-127px] ',
      ]"
      :style="{
        borderStyle: borderStyle,
        borderColor: borderColor,
        zIndex: zIndex,
      }"
    />
    <div>
      <div :class="`flex flex-col h-[350px] ${!firstCard ? 'ml-4' : ''}`">
        <div class="h-[40%]">
          <img
            :src="src"
            :alt="alt"
            class="relative top-[7px] h-full w-full"
            :class="{ 'xl:w-[90px]': size === 'small' }"
          >
        </div>
        <div
          class="h-[40%] flex flex-col"
          :class="size === 'small' ? 'pt-3 xl:pt-1' : 'pt-5 xl:pt-10'"
        >
          <div
            class="font-oswald font-bold w-[158px] mb-1"
            :class="[
              textColor,
              size === 'small'
                ? 'w-[155px] xl:w-[135px] text-xl xl:text-lg'
                : 'w-[155px] text-xl',
            ]"
          >
            <slot name="cardTitle" />
          </div>
          <div
            class="font-roboto w-[158px] text-pretty"
            :class="[
              size === 'small'
                ? 'w-[145px] xl:w-[125px] text-[14px] xl:text-[15px]'
                : 'w-[150px] text-[14px] xl:text-[15px]',
            ]"
          >
            <slot name="cardText" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  zIndex?: number;
  borderColor: string;
  borderStyle: string;
  textColor: string;
  firstCard?: boolean;
  size?: "full" | "small";
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.line-top-left {
  position: absolute;
  top: 86px;
  left: -67px;
  rotate: 76deg;
}

.line-bottom-left {
  position: absolute;
  bottom: 86px;
  left: -67px;
  rotate: -76deg;
}

.line-top-right {
  position: absolute;
  top: 85px;
  right: -111px;
  rotate: 76deg;
}

.line-bottom-right {
  position: absolute;
  bottom: 85px;
  right: -111px;
  rotate: -76deg;
}

@media (min-width: 1200px) {
  .line-top-left {
    position: absolute;
    top: 98px;
    left: -77px;
    rotate: 76deg;
  }

  .line-bottom-left {
    position: absolute;
    bottom: 97px;
    left: -77px;
    rotate: -76deg;
  }

  .line-top-right {
    position: absolute;
    top: 99px;
    right: -127px;
    rotate: 76deg;
  }

  .line-bottom-right {
    position: absolute;
    bottom: 99px;
    right: -127px;
    rotate: -76deg;
  }
}
</style>
