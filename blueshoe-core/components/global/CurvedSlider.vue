<template>
  <client-only>
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

        <div class="block xl:hidden relative">
          <Swiper
            ref="mySwiper"
            :modules="[Pagination, Navigation]"
            :slides-per-view="1.5"
            :allow-touch-move="true"
            :pagination="{
              clickable: true,
              type: 'bullets',
            }"
            :navigation="{
              nextEl: '.swiper-button-next-curved',
              prevEl: '.swiper-button-prev-curved',
              disabledClass: 'swiper-button-disabled-curved',
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
              class="relative !bg-transparent w-full"
              :class="[idx === 3 ? 'w-[16%] max-w-[180px]' : 'w-[27%]']"
              :style="{
                'z-index': idx === 2 ? '10' : 'auto',
                margin: idx === 5 ? '0 -50px 0 0' : 'auto',
              }"
            >
              <slot v-if="idx !== 6" :name="'card' + idx" />
              <div
                v-else
                class="ml-12 flex flex-col justify-center h-[350px] md:hidden"
              >
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
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button-prev-curved md:hidden z-50"></div>
          <div class="swiper-button-next-curved md:hidden z-50"></div>
        </div>

        <div class="hidden relative xl:flex gap-[4px] w-full">
          <div
            v-for="idx in 5"
            :key="idx"
            class="relative w-[21%] h-[350px]"
            :class="[idx === 3 ? 'w-[16%]' : 'w-[25%]']"
          >
            <slot :size="size" :name="`card${idx}`" />
          </div>
        </div>

        <div
          class="flex flex-col items-center xl:flex-row xl:justify-center xl:mt-12 w-[60%] xl:w-full mx-auto"
          :class="[size === 'small' ? 'mt-4' : 'pt-4 xl:pt-10']"
        >
          <div class="mb-4 xl:mb-0 xl:mr-7">
            <div class="flex flex-col items-center">
              <booster-image
                :src="src"
                :alt="'Blueshoe expert ' + alt"
                :title="'Blueshoe expert ' + alt"
                class="border-[5px] border-bs-green rounded-full"
              />
              <span class="pt-1 text-bs-blue font-bold" v-text="alt" />
            </div>
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
</client-only>
</template>

<script setup lang="ts">
import BoosterImage from "#booster/components/BoosterImage";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
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

.swiper-button-next-curved:after {
  content: none;
}

.swiper-button-next-curved {
  background: white
    url("https://api.iconify.design/bi/arrow-right.svg?color=%232470a9&width=26&height=26")
    no-repeat center center;
  position: absolute;
  right: -23px;
  bottom: 0px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
}

.swiper-button-prev-curved:after {
  content: none;
}

.swiper-button-prev-curved {
  background: white
    url("https://api.iconify.design/bi/arrow-left.svg?color=%232470a9&width=26&height=26")
    no-repeat center center;
  position: absolute;
  left: -23px;
  bottom: 0px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
}

.swiper-button-disabled-curved {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
