<template>
  <div>
    <video v-if="!isYoutube" :id="playerId" playsinline :data-poster="thumbnailUrl">
      <source :src="videoUrl" type="video/mp4" />
    </video>
    <div v-else :id="playerId" data-plyr-provider="youtube" :data-plyr-embed-id="embedId"></div>
  </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';

interface Props {
  videoUrl: string;
  thumbnailUrl?: string;
  videoId: number;
  modal: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modal: false
});

const player = ref<Plyr | null>(null);

const playerId = computed(() => `player-${props.videoId}`);

const controlsList = computed(() => {
  return props.modal
    ? ['play-large']
    : [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen'
      ];
});

const isYoutube = computed(() => {
  return props.videoUrl.includes('youtube.com');
});

const embedId = computed(() => {
  if (isYoutube.value) {
    const sections = props.videoUrl.split('/');
    return sections[sections.length - 1];
  } else {
    return '';
  }
});

onMounted(() => {
  player.value = new Plyr(`#${playerId.value}`, {
    controls: controlsList.value,
    muted: props.modal,
    autoplay: props.modal
    // fullscreen: { enabled: true, fallback: true, iosNative: true },
    // youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }
  });

  if (props.modal) {
    player.value.on('playing', () => {
      player.value?.pause();
    });
  }
});

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.plyr.io/3.7.8/plyr.css'
    }
  ]
});
</script>

<style scoped></style>
