import { defineStore } from "pinia";

export const AdviceStore = defineStore("advice", {
  state: () => ({
    advices: {},
  }),
  actions: {
    async getApi() {
      await fetch("https://api.adviceslip.com/advice")
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          console.log(data);
          this.advices = data.slip;
        });
    },
  },

  getters: {},
});
