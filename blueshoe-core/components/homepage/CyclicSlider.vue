<template>
  <div class="container-fluid p-0 marquee-container">
    <div class="intro">
      <div class="marquee">
        <div>
          <div class="cloud">
            <img
              v-if="isStory"
              src="/img/homepage/layer_3.svg"
              alt="Blueshoe Sky"
              width="2400"
              height="420"
              class="max-w-[2400px] max-h-[420px]"
            />
            <booster-image
              v-if="!isStory"
              src="/img/homepage/layer_3.svg"
              title="Blueshoe Sky"
              alt="Blueshoe Sky"
              width="2400"
              height="420"
              class="max-w-[2400px] max-h-[420px]"
              format="webp"
            />
          </div>
          <div class="window-container">
            <div class="window2">
              <img
                src="/img/homepage/layer_2.svg"
                alt="Blueshoe Windows"
                width="2400"
                height="420"
                class="max-w-[2400px] max-h-[420px]"
              />
            </div>
            <div class="window">
              <img
                src="/img/homepage/layer_2.svg"
                alt="Blueshoe Windows"
                width="2400"
                height="420"
                class="max-w-[2400px] max-h-[420px]"
              />
            </div>
          </div>
          <div class="desks-container">
            <div class="desks">
              <img
                src="/img/homepage/layer_1.svg"
                alt="Blueshoe Office"
                width="2400"
                height="420"
                class="max-w-[2400px] max-h-[420px]"
              />
            </div>
            <div class="desks2">
              <img
                src="/img/homepage/layer_1.svg"
                alt="Blueshoe Office"
                width="2400"
                height="420"
                class="max-w-[2400px] max-h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';

interface Props {
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isStory: false
});
</script>

<style></style>
