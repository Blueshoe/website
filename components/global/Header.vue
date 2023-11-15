<template>
  <div class="relative bs-container flex h-[55px] justify-between items-center">
    <NuxtImg src="/img/blueshoe-navbar-logo.png" width="200" />
    <nav class="text-xl text-bs-menu font-oswald font-extralight">
      <button
        v-if="isMobile"
        class="text-black w-10 h-10 relative focus:outline-none bg-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
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
      <MobileMenu v-if="isMobileMenuOpen" />
      <DesktopMenu v-if="isDesktop" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import DesktopMenu from '~/components/global/DesktopMenu.vue';
import MobileMenu from '~/components/global/MobileMenu.vue';

const isMobile = ref(false);
const isDesktop = ref(false);
const isMobileMenuOpen = ref(false);

const updateWidth = () => {
  isMobile.value = window.innerWidth < 1024;
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  updateWidth();
});
</script>
