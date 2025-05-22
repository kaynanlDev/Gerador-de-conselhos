<script setup lang="ts"></script>

<template>
  <div class="advice-container">
    <p class="advice-title">Advice #</p>
    <p>
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi
      itaque, sapiente quos rerum qui architecto impedit voluptates facere
      eveniet nesciunt dicta reiciendis distinctio soluta cupiditate magnam quod
      eius molestiae."
    </p>
    <div class="divider">
      <img src="../assets/images/pattern-divider-desktop.svg" alt="divider" />
    </div>
    <div class="icon-dice">
      <img src="../assets/images/icon-dice.svg" alt="icon dice" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advice-container {
  position: relative;
  background-color: $Blue-900;
  max-width: 50%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: $Blue-200;
    font-weight: 600;
  }

  .advice-title {
    color: $Green-300;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 4px;
  }

  .divider {
    width: 80%;
    margin: 1rem 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon-dice {
    position: absolute;
    bottom: -16px;
    background-color: $Green-300;
    width: 18px;
    height: 18px;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
