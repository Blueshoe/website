<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot />
        </div>
        <div class="block lg:hidden">
          <Swiper
            :modules="[SwiperPagination, SwiperVirtual]"
            :slides-per-view="1"
            :allow-touch-move="true"
            :pagination="{
              clickable: true,
              type: 'bullets'
            }"
            :virtual="true"
          >
            <SwiperSlide v-for="(number, i) in props.numberCards" :key="i" :virtual-index="i" class="mb-10">
              <div class="w-full">
                <div class="mb-4">
                  <slot :name="'card' + number" />
                </div>
                <div class="flex justify-center">
                  <img :src="images[i].src" :alt="images[i].alt" class="max-w-[500px] w-full" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="hidden lg:grid lg:grid-cols-2">
          <div class="flex justify-center" :class="[imagePosition === 'left' ? 'sm:order-1' : 'sm:order-2']">
            <img :src="images[activeSlider].src" :alt="images[activeSlider].alt" class="max-w-[500px] w-full" />
          </div>
          <div class="flex flex-col relative" :class="[imagePosition === 'left' ? 'sm:order-2' : 'sm:order-1']">
            <div
              v-for="(number, i) in props.numberCards"
              :key="i"
              class="px-10 py-6 duration-500 transition-all"
              :class="{ 'slider-with-image-shadow': activeSlider === i && mouseOver === i }"
              @mouseover="handleSlider(i)"
              @mouseleave="mouseOver = null"
            >
              <slot :name="'card' + number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
interface Props {
  bg?: 'bg-bs-blue' | 'bg-white';
  numberCards: number;
  images: { src: string; alt: string }[];
  imagePosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-blue',
  imagePosition: 'left'
});

const activeSlider = ref(0);
const mouseOver = ref<number | null>(null);

function handleSlider(i: number) {
  activeSlider.value = i;
  mouseOver.value = i;
}
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
