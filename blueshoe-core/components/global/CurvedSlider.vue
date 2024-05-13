<template>
  <div :class="bg">
    <div class="bs-container">
      <div
        class="curved-slider py-10 px-4 lg:px-0"
        :class="[size === 'small' ? 'xl:w-[85%] mx-auto' : 'w-full mx-auto']"
      >
        <div class="mb-12">
          <h3 class="text-base text-bs-green leading-5 font-roboto uppercase">
            <slot name="preTitle" />
          </h3>
          <h2 class="text-[40px] text-bs-blue font-oswald font-bold">
            <slot name="title" />
          </h2>
        </div>

        <div class="block xl:hidden">
          <Swiper
            ref="mySwiper"
            :modules="[Pagination]"
            :slides-per-view="1.5"
            :allow-touch-move="true"
            :pagination="{
              clickable: true,
              type: 'bullets',
            }"
            :breakpoints="{
              '450': {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '600': {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
              '768': {
                slidesPerView: 3.5,
                spaceBetween: 0,
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              '1200': {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }"
            class="swiper-container"
          >
            <SwiperSlide
              v-for="idx in 6"
              :key="idx"
              class="relative !bg-transparent"
              :style="{
                width: idx === 3 ? '180px' : '205px',
                'z-index': idx === 2 ? '10' : 'auto',
                margin: idx === 5 ? '0 -50px 0 0' : 'auto',
              }"
            >
              <slot :name="'card' + idx" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="hidden relative xl:flex gap-[4px] w-full">
          <div
            v-for="idx in 5"
            :key="idx"
            class="relative w-[21%] h-[350px]"
            :class="[idx === 3 ? 'w-[16%]' : 'w-[21%]']"
          >
            <slot :size="size" :name="`card${idx}`" />
          </div>
        </div>

        <div
          class="flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-center xl:mt-12 w-[60%] xl:w-full mx-auto"
          :class="[size === 'small' ? 'mt-4' : 'pt-4 xl:pt-10']"
        >
          <div class="mb-4 xl:mb-0 xl:mr-7">
            <img
              :src="src"
              :alt="alt"
              class="border-[5px] border-bs-green rounded-full w-[100px] h-[100px] xl:w-[110px] xl:h-[110px]"
            />
          </div>
          <div class="flex flex-col items-center">
            <div
              class="text-bs-blue font-oswald font-bold text-center"
              :class="[
                size === 'small'
                  ? 'text-[22px] md:text-[28px] xl:leading-[28px] mb-3 xl:mb-6'
                  : 'text-[22px] md:text-[32px] xl:leading-[32px] mb-3',
              ]"
            >
              <slot name="buttonBlockTitle" />
            </div>
            <div class="w-full">
              <NuxtLink
                :to="buttonUrl"
                :target="buttonTarget"
                class="inline-block bg-bs-green text-center text-lg xl:text-xl font-normal font-roboto cursor-pointer text-white w-full rounded-lg"
                :class="[
                  size === 'small'
                    ? 'text-lg py-3'
                    : 'text-lg xl:text-xl py-3 xl:py-4',
                ]"
              >
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";

interface Props {
  bg?: "bg-bs-blue" | "bg-white" | "bg-bs-gray";
  bgSlider?: "bg-white";
  src: string;
  alt: string;
  buttonUrl: string;
  buttonTarget?: "_blank" | "_self";
  size: "full" | "small";
}

const props = withDefaults(defineProps<Props>(), {
  bg: "bg-white",
  bgSlider: "bg-white",
  buttonTarget: "_blank",
});
</script>

<style>
.swiper-container {
  position: relative;
  width: 100%;
}

.swiper-container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 87%;
  pointer-events: none;
}

.swiper .swiper-pagination .swiper-pagination-bullet {
  background: #8ed9bc !important;
}

.swiper
  .swiper-pagination
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #63d9b6 !important;
}

.swiper.swiper-container .swiper-wrapper {
  gap: 4px !important;
  align-items: start !important;
  justify-content: flex-start !important;
  padding-bottom: 50px !important;
}

.swiper-wrapper {
  display: flex !important;
  gap: 4px !important;
  align-items: start !important;
}
</style>
