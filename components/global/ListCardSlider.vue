<template>
  <div class="mb-4">
    <div class="block md:hidden">
      <Swiper
        :modules="[SwiperPagination, SwiperVirtual]"
        :slides-per-view="1"
        :allow-touch-move="true"
        :loop="true"
        :pagination="{
          clickable: true,
          type: 'bullets'
        }"
        :virtual="true"
      >
        <SwiperSlide v-for="(number, i) in props.numberCards" :key="i" :virtual-index="i"
          ><slot :name="'card' + number"
        /></SwiperSlide>
      </Swiper>
    </div>
    <div class="hidden md:grid md:grid-cols-2 xl:grid-cols-4">
      <div v-for="(number, i) in props.numberCards" :key="i"><slot :name="'card' + number" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
interface Props {
  numberCards: number;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #000;
}
</style>
