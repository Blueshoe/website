<template>
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-7"
  >
    <ul
      class="flex items-center justify-center md:gap-5 lg:gap-10 xl:gap-16 md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    >
      <li v-for="(img, i) in images" :key="i">
        <img :src="img.img" :alt="img.alt" :style="{ filter: 'grayscale(100%)' }" />
      </li>
    </ul>
    <ul
      ref="logos"
      class="flex items-center justify-center md:gap-5 lg:gap-10 xl:gap-16 md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      <li v-for="(img, i) in images" :key="i">
        <img :src="img.img" :alt="img.alt" :style="{ filter: 'grayscale(100%)' }" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';
const logos = ref(null);

onMounted(() => {
  const ul: HTMLElement = logos.value;
  if (!ul) return;
  ul.insertAdjacentHTML('afterend', ul.outerHTML);
  ul.nextSibling?.setAttribute('aria-hidden', 'true');
});

const images = ref([
  { img: '/img/brands-slides/allgau.jpg', alt: 'Allgau' },
  { img: '/img/brands-slides/allianz-logo.jpg', alt: 'Allianz' },
  { img: '/img/brands-slides/audi-logo.jpg', alt: 'Audi' },
  { img: '/img/brands-slides/chip.jpg', alt: 'Chip' },
  { img: '/img/brands-slides/deutsches-museum.jpg', alt: 'Deutsches Museum' },
  { img: '/img/brands-slides/die-produkt-macher-logo.png', alt: 'DieProduktMacher' },
  { img: '/img/brands-slides/dom-perignon.jpg', alt: 'Dom Perignon' },
  { img: '/img/brands-slides/fonds-finanz.jpg', alt: 'Finanz' },
  { img: '/img/brands-slides/haufe-lexware.jpg', alt: 'Haufe Lexware' },
  { img: '/img/brands-slides/kaufland.jpg', alt: 'Kaufland' },
  { img: '/img/brands-slides/luma.jpg', alt: 'Luma' },
  { img: '/img/brands-slides/ofa-logo.jpg', alt: 'Ofa' },
  { img: '/img/brands-slides/swm.jpg', alt: 'SWM' },
  { img: '/img/brands-slides/travian.jpg', alt: 'Travian' },
  { img: '/img/brands-slides/tuhh-logo.jpg', alt: 'TUHH' },
  { img: '/img/brands-slides/uni-augsburg.jpg', alt: 'Uni Augsburg' },
  { img: '/img/brands-slides/winter-company.jpg', alt: 'Winter Company' }
]);
</script>

<style scoped></style>
