<template>
  <div class="bg-bs-gray">
    <div class="bs-container py-10">
      <div class="px-4 lg:px-0">
        <div class="mb-10"><slot /></div>
        <div><slot name="cards" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
