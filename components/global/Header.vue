<template>
  <div class="fixed z-50 bg-white w-full">
    <div class="relative bs-container flex h-[70px] justify-between items-center">
      <NuxtLink to="/"
        ><speedkit-image
          src="/img/blueshoe-navbar-logo.png"
          width="200"
          height="51"
          class="max-w-[200px]"
          alt="Blushoe logo"
          format="webp"
      /></NuxtLink>
      <nav ref="refNav" class="text-xl text-bs-menu font-oswald font-extralight">
        <button
          v-if="isMobile"
          class="text-black w-10 h-10 relative focus:outline-none bg-white"
          @click="handleMobileMenu"
        >
          <span class="sr-only">Open main menu</span>
          <div class="w-5 block absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              class="block absolute h-[3px] w-[30px] bg-current transform transition duration-500 ease-in-out mb-[7px]"
              :class="{ 'rotate-45': isMobileMenuOpen, ' -translate-y-2.5': !isMobileMenuOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-[3px] w-[30px] bg-current transform transition duration-500 ease-in-out mb-[7px]"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-[3px] w-[30px] bg-current transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': isMobileMenuOpen, ' translate-y-2.5': !isMobileMenuOpen }"
            ></span>
          </div>
        </button>
        <DesktopMenu v-if="isDesktop" />
      </nav>
    </div>
    <MobileMenu v-if="isMobileMenuOpen" />
  </div>
</template>

<script setup lang="ts">
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';
import DesktopMenu from '~/components/global/DesktopMenu.vue';
import MobileMenu from '~/components/global/MobileMenu.vue';

const generalStore = useGeneralStore();
const { menu, isMobileMenuOpen } = storeToRefs(generalStore);

const refNav = ref(null);
const isMobile = ref(false);
const isDesktop = ref(false);

const updateWidth = () => {
  isMobile.value = window.innerWidth < 1024;
  isDesktop.value = window.innerWidth >= 1024;
};

const handleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  updateWidth();
});
</script>
