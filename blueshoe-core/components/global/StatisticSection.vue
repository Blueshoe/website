<template>
  <div ref="numberContainer" class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-4 bg-bs-blue">
    <div class="flex flex-col items-center">
      <div class="font-oswald text-[64px] font-extralight text-white mb-7">{{ currentGreatTeamMembers }}</div>
      <div class="text-lg text-center font-source-sans-pro font-light text-white">
        <p class="inline-block text-center mx-auto">Tolle Teammitglieder</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="font-oswald text-[64px] font-extralight text-white mb-7">{{ currentSuccessfulProjects }}</div>
      <div class="text-lg text-center font-source-sans-pro font-light text-white">
        <p class="inline-block text-center mx-auto">Erfolgreiche Projekte</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="font-oswald text-[64px] font-extralight text-white mb-7">{{ currentSatisfiedCustomers }}</div>
      <div class="text-lg text-center font-source-sans-pro font-light text-white">
        <p class="inline-block text-center mx-auto">Zufriedene Kunden</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="font-oswald text-[64px] font-extralight text-white mb-7">{{ currentRunningKubernetesClusters }}</div>
      <div class="text-lg text-center font-source-sans-pro font-light text-white">
        <p class="inline-block text-center mx-auto">Laufende Kubernetes Cluster</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  greatTeamMembers: number;
  successfulProjects: number;
  satisfiedCustomers: number;
  runningKubernetesClusters: number;
}

const props = withDefaults(defineProps<Props>(), {});
const currentGreatTeamMembers = ref(0);
const currentSuccessfulProjects = ref(0);
const currentSatisfiedCustomers = ref(0);
const currentRunningKubernetesClusters = ref(0);
const numberContainer = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      let start = Date.now();
      let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
          clearInterval(timer);
          currentGreatTeamMembers.value = props.greatTeamMembers;
          currentSuccessfulProjects.value = props.successfulProjects;
          currentSatisfiedCustomers.value = props.satisfiedCustomers;
          currentRunningKubernetesClusters.value = props.runningKubernetesClusters;
          return;
        }
        draw(timePassed);
      }, 20);
      function draw(timePassed) {
        currentGreatTeamMembers.value = Math.round((timePassed / 2000) * props.greatTeamMembers);
        currentSuccessfulProjects.value = Math.round((timePassed / 2000) * props.successfulProjects);
        currentSatisfiedCustomers.value = Math.round((timePassed / 2000) * props.satisfiedCustomers);
        currentRunningKubernetesClusters.value = Math.round((timePassed / 2000) * props.runningKubernetesClusters);
      }
    }
  });
  observer.observe(numberContainer.value);
});
</script>

<style scoped></style>
