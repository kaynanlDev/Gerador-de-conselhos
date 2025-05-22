<script setup lang="ts">
import { computed } from "vue";
import { AdviceStore } from "./store/Advice";
import Advice from "./components/Advice.vue";
const store = AdviceStore();

const msg = computed(() => store.textCount);
</script>

<template>
  <Advice />
  <!-- Advice text goes here -->

  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div>
</template>

<style scoped></style>
