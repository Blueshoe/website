<template>
  <div
    v-if="props.href"
    class="transition ease-in-out delay-50 duration-300 hover:scale-105"
  >
    <NuxtLink
      :to="props.href"
      :target="target"
    >
      <div
        class="flex flex-col shadow-xl w-full h-full p-6"
        :class="bg"
      >
        <div class="h-16">
          <ContentSlot
            unwrap="p"
            name="title"
          />
        </div>
        <div class="flex flex-col gap-2">
          <div
            v-if="src"
            class="flex items-start justify-center px-6 sm:p-0"
          >
            <img
              v-if="isStory"
              :src="src"
              class="max-w-[250px] sm:min-w-[150px] sm:max-w-[140px] md:max-w-[100px] w-full lg:min-w-[60px] xl:w-[50px]"
              alt="background image"
              format="webp"
              width="120"
              height="120"
            >
            <booster-image
              v-if="!isStory"
              :src="src"
              title="background image"
              class="max-w-[250px] sm:min-w-[150px] sm:max-w-[140px] md:max-w-[100px] w-full lg:min-w-[60px] xl:w-[50px]"
              alt="background image"
              format="webp"
              width="120"
              height="120"
            />
          </div>
          <div
            :lang="props.lang"
            class="text-lg font-light font-source-sans-pro leading-[26px] text-bs-text hyphens-auto"
          >
            <slot />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
  <!--- I didn't know it better --->
  <div
    v-else
    class="flex flex-col sm:flex-row justify-between gap-6 lg:gap-1 shadow-xl w-full h-full p-6"
    :class="bg"
  >
    <div
      v-if="src"
      class="sm:order-2 flex items-center justify-center px-6 sm:p-0"
    >
      <img
        v-if="isStory"
        :src="src"
        class="max-w-[310px] sm:min-w-[150px] sm:max-w-[200px] md:max-w-[160px] w-full lg:min-w-[120px] xl:w-[110px]"
        alt="background image"
        format="webp"
        width="120"
        height="120"
      >
      <booster-image
        v-if="!isStory"
        :src="src"
        title="background image"
        class="max-w-[310px] sm:min-w-[150px] sm:max-w-[200px] md:max-w-[160px] w-full lg:min-w-[120px] xl:w-[110px]"
        alt="background image"
        format="webp"
        width="120"
        height="120"
      />
    </div>
    <div class="sm:order-1">
      <ContentSlot
        unwrap="p"
        name="title"
      />
      <div
        :lang="props.lang"
        class="text-lg font-light font-source-sans-pro leading-[26px] text-bs-text hyphens-auto"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';
import Title from './Title.vue';
type BgColor = 'bg-white' | 'bg-bs-blue';
type Target = '_blank' | '_self';

interface Props {
  src?: string;
  href?: string;
  lang?: string;
  bg?: BgColor;
  target?: Target;
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-white',
  target: '_self',
  isStory: false,
  lang: "en"
});
</script>

<style scoped></style>
