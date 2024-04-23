<template>
  <div :class="blockBg">
    <div class="bs-container py-10">
      <div class="flex flex-col items-center px-4 lg:px-0">
        <div class="text-[40px] font-oswald text-bs-text font-extralight mb-10">{{ title }}</div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <NuxtLink v-for="(article, i) in articles" :key="i" :to="article.url" :target="target">
            <div
              class="flex flex-col sm:flex-row justify-between gap-6 lg:gap-1 shadow-xl w-full h-full p-6"
              :class="cardBg"
            >
              <div class="sm:order-2 flex items-center justify-center px-6 sm:p-0">
                <speedkit-image
                  src="/img/global/icons/blog.svg"
                  class="max-w-[280px] sm:min-w-[150px] sm:max-w-[200px] md:max-w-[160px] w-full lg:min-w-[120px] xl:min-w-[100px]"
                  alt="background image"
                  format="webp"
                  width="120"
                  height="120"
                />
              </div>
              <div class="sm:order-1">
                <div class="text-[20px] font-oswald font-extralight text-bs-blue uppercase mb-3">
                  <h3>{{ article.title }}</h3>
                </div>
                <div class="text-[17.6px] font-source-sans-pro font-light text-bs-text mb-4">
                  <p>{{ article.content }}</p>
                </div>
                <div class="text-[17.6px] font-source-sans-pro font-light text-bs-text">
                  <p>{{ article.author }}</p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
type Bg = 'bg-white' | 'bg-bs-blue' | 'bg-bs-gray';
type Articles = {
  title: string;
  content: string;
  author: string;
  url: string;
};

interface Props {
  title: string;
  blockBg?: Bg;
  cardBg?: Bg;
  target?: '_blank' | '_self';
  articles?: Articles[];
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray',
  blockBg: 'bg-bs-gray',
  cardBg: 'bg-white',
  target: '_self',
  articles: [
    {
      title: 'Local K8s Development',
      content: 'How does local development with Kubernetes work?',
      author: 'By Robert Gutschale',
      url: 'https://www.blueshoe.io/blog/local-kubernetes-development/'
    },
    {
      title: 'Django Hurricane',
      content: 'A Kubernetes native stack created for django',
      author: 'By Robert Gutschale',
      url: 'https://www.blueshoe.io/blog/django-development-for-kubernetes/'
    },
    {
      title: 'K8s Development Tools',
      content: 'Minikube vs. k3d vs. kind vs. Getdeck Beiboot',
      author: 'By Michael Schilonka',
      url: 'https://www.blueshoe.io/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/'
    }
  ]
});
</script>

<style scoped></style>
