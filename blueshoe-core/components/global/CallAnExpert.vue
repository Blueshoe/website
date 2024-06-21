<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0 w-full mx-auto">
       
        <div
          class="flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-center w-[60%] mx-auto">
          <div class="mb-4 xl:mb-0 xl:mr-7 flex items-center">
            <div class="flex flex-col items-center">
              <booster-image :src="src" :alt="'Blueshoe expert ' + alt" :title="'Blueshoe expert ' + alt"
              class="border-[5px] border-bs-green rounded-full" />
              <span class="pt-1 font-bold" :class="bg === 'bg-bs-blue' ? 'text-white' : ''" v-text="alt" />
            </div>
          </div>
          

          <div class="flex flex-col items-center">
            <div :class="bg === 'bg-bs-blue' ? 'text-white' : ''" class="font-oswald font-bold text-center text-[22px] md:text-[32px] xl:leading-[32px] mb-6">
              <slot name="buttonBlockTitle" />
            </div>
            
            <div class="w-full pt-4">
              <NuxtLink :to="buttonUrl" :target="buttonTarget"
                class="inline-block bg-bs-green text-center text-lg xl:text-xl font-normal font-roboto cursor-pointer text-white w-full rounded-lg py-4 xl:py-4">
                <slot name="buttonLabel" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';

interface Props {
  bg?: "bg-bs-blue" | "bg-white" | "bg-bs-gray";
  bgSlider?: "bg-white";
  src: string;
  alt: string;
  buttonUrl: string;
  buttonTarget?: "_blank" | "_self";
}

const props = withDefaults(defineProps<Props>(), {
  bg: "bg-white",
  bgSlider: "bg-white",
  buttonTarget: "_blank",
});
</script>