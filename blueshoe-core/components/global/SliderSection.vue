<template>
  <div>
    <div :class="bg">
      <div class="bs-container">
        <div class="py-10 px-4 lg:px-0">
          <div class="mb-12">
            <slot />
          </div>
          <div
            class="block z-0 slider-shadow relative lg:mx-5"
            :class="bgSlider"
          >
            <div
              class="glide"
            >
              <div
                class="glide__track"
                data-glide-el="track"
              >
                <ul class="glide__slides">
                  <li
                    v-for="(number, i) in props.numberCards"
                    :key="i"
                    class="glide__slide mb-10"
                  >
                    <slot
                      :name="'card' + number"
                    />
                  </li>
                </ul>
              </div>

              <div
                class="glide__arrows"
                data-glide-el="controls"
              >
                <button
                  class="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                />
                <button
                  class="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Glide from '@glidejs/glide'

onMounted(() => {
  new Glide('.glide', {
    type: "slider",
    rewind: false,
  }).mount()
})

interface Props {
  bg?: 'bg-bs-blue' | 'bg-white' | 'bg-bs-gray';
  bgSlider?: 'bg-white';
  numberCards: number;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-white',
  bgSlider: 'bg-white'
});
</script>

<style scoped>
</style>
