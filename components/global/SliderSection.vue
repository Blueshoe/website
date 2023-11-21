<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-10 lg:px-0">
        <div class="mb-12">
          <slot />
        </div>
        <div class="block z-0 slider-shadow relative mx-5">
          <Swiper
            :modules="[SwiperNavigation, SwiperVirtual]"
            :slides-per-view="1"
            :allow-touch-move="true"
            :loop="true"
            :virtual="true"
            :navigation="{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }"
          >
            <SwiperSlide v-for="(number, i) in props.numberCards" :key="i" :virtual-index="i" class="mb-10">
              <div class="mb-4">
                <slot :name="'card' + number" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div ref="prev" class="swiper-button-prev"></div>
          <div ref="next" class="swiper-button-next"></div>
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
  bg: 'bg-white',
  imagePosition: 'left'
});

const activeSlider = ref(1);
const prev = ref(null);
const next = ref(null);

function handleSlider(i: number) {
  activeSlider.value = i;
}
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-button-next:after {
  content: none;
}
.swiper-button-next {
  background: white url('https://api.iconify.design/bi/arrow-right.svg?color=%232470a9&width=26&height=26') no-repeat
    center center;
  right: -23px;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
}
.swiper-button-prev:after {
  content: none;
}
.swiper-button-prev {
  background: white url('https://api.iconify.design/bi/arrow-left.svg?color=%232470a9&width=26&height=26') no-repeat
    center center;
  left: -23px;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
}
</style>
