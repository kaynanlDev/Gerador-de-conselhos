<script setup lang="ts">
import AdviceContainer from "./components/AdviceContainer.vue";
import { AdviceStore } from "./store/Advice";
const store = AdviceStore();
</script>

<template>
  <AdviceContainer />
  <!-- Advice text goes here -->
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="https://github.com/kaynanlDev">KaynanlDev</a>.
  </div>
</template>

<style scoped>
.attribution {
  position: absolute;
  bottom: 0;
  font-size: 10px;
  color: #fff;
  opacity: 0.5;
}

a {
  color: #fff;
}
</style>
