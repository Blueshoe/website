<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot />
        </div>
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
            <SwiperSlide v-for="(number, i) in props.numberCards" :key="i" :virtual-index="i" class="mb-8"
              ><slot :name="'card' + number"
            /></SwiperSlide>
          </Swiper>
        </div>
        <div class="hidden md:grid md:grid-cols-2">
          <div v-for="(number, i) in props.numberCards" :key="i"><slot :name="'card' + number" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bg?: 'bg-bs-gray' | 'bg-white';
  numberCards: number;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray'
});
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #000;
}
</style>
