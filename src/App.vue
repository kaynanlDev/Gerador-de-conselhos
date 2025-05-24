<script setup lang="ts">
import AdviceContainer from "./components/AdviceContainer.vue";
import { AdviceStore } from "./store/Advice";
import { onMounted } from "vue";
const store = AdviceStore();
</script>

<template>
  <AdviceContainer />
  <!-- Advice text goes here -->
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div>
</template>

<style scoped>
.attribution {
  position: absolute;
  bottom: 0;
}
</style>
