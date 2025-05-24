import { defineStore } from "pinia";

export const AdviceStore = defineStore("advice", {
  state: () => ({
    menssagens: "",
    idAdvice: 0,
  }),
  actions: {
    getApi() {
      fetch("https://api.adviceslip.com/advice")
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          console.log(data);
          this.menssagens = data.slip.advice;
          this.idAdvice = data.slip.id;
        });
    },
  },

  getters: {},
});
