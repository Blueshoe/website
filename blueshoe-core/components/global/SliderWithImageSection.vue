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
                  <img
                    :src="images[i].src"
                    :alt="images[i].alt"
                    class="object-contain max-w-[500px] w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="hidden lg:grid lg:grid-cols-2">
          <div class="flex justify-center" :class="[imagePosition === 'left' ? 'sm:order-1' : 'sm:order-2']">
            <img
              :src="images[activeSlider].src"
              :alt="images[activeSlider].alt"
              class="object-contain max-w-[350px] w-full h-full"
            />
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
        <div v-if="$slots.summary" class="pr-10 pt-6">
          <slot name="summary" />
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
  dotColor?: 'white' | 'black';
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-blue',
  imagePosition: 'left',
  dotColor: 'white'
});

const activeSlider = ref(0);
const mouseOver = ref<number | null>(null);

function handleSlider(i: number) {
  activeSlider.value = i;
  mouseOver.value = i;
}
</script>

<style scoped>
.swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: v-bind(dotColor) !important;
}
</style>
