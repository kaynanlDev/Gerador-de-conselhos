import { defineStore } from "pinia";

export const AdviceStore = defineStore("advice", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },

  getters: {
    textCount(state): String {
      return "o valor é:" + this.count;
    },
  },
});
