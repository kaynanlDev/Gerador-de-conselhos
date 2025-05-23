<script setup lang="ts">
import Advices from "./components/Advices.vue";
import { AdviceStore } from "./store/Advice";
import { onMounted } from "vue";
const store = AdviceStore();

onMounted(() => {
  store.getApi();
});
</script>

<template>
  <Advices />
  <!-- Advice text goes here -->
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div>
</template>

<style scoped></style>
