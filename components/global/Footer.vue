<template>
  <div class="bg-bs-blue">
    <div class="bs-container text-white py-10">
      <div class="text-2xl xl:text-[28px] font-oswald font-extralight mb-5">BLUESHOE GmbH</div>
      <div class="md:flex md:gap-8 lg:gap-12 xl:gap-16 text-lg font-source-sans-pro font-light">
        <div class="md:w-[160px] mb-10 md:mb-5">
          <h4 class="mb-2.5">ADDRESS</h4>
          <div>Bahnhofstraße 3a</div>
          <div>82166 Gräfelfing bei München</div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">CONTACT</h4>
          <div>+49 89 54198422</div>
          <div>hello@blueshoe.io</div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">LINKS</h4>
          <div class="flex">
            <NuxtLink to="/legal-notice" class="underline mr-3">Legal notice</NuxtLink>
            <NuxtLink to="/data-privacy" class="underline">Data privacy</NuxtLink>
          </div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">FOLLOW US</h4>
          <div>
            <NuxtLink target="_blank" to="https://www.facebook.com/BlueshoeDigital" class="mr-2">
              <Icon name="fa:facebook-square" width="30" height="30" class="pb-1" />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.linkedin.com/company/blueshoe/"
              ><Icon name="fa:linkedin-square" width="30" height="30" class="pb-1"
            /></NuxtLink>
          </div>
        </div>
      </div>
      <div class="text-lg font-source-sans-pro font-light">© 2023 BLUESHOE GmbH</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
