<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot />
        </div>
        <div class="block">
          <Swiper
            :modules="[SwiperNavigation, SwiperVirtual]"
            :slides-per-view="1"
            :allow-touch-move="true"
            :loop="true"
            :virtual="true"
            :navigation="true"
          >
            <SwiperSlide v-for="(number, i) in props.numberCards" :key="i" :virtual-index="i" class="mb-10">
              <div class="mb-4">
                <slot :name="'card' + number" />
              </div>
            </SwiperSlide>
            <!--            <div slot="container-start" class="swiper-button-next" @click="$refs.swiper?.$swiper.slideNext()"></div>-->
            <!--            <div slot="container-end" class="swiper-button-prev" @click="$refs.swiper?.$swiper.slidePrev()"></div>-->
          </Swiper>
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

function handleSlider(i: number) {
  activeSlider.value = i;
}
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-button-next {
  width: 10px;
  height: 10px;
  background-color: black;
}
</style>
