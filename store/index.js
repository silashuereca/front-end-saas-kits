import { defineStore } from "pinia";

export const useAuthUser = defineStore("counter", {
  state: () => ({
    authUser: null,
  }),
  actions: {
    setAuth(value) {
      this.authUser = value;
    },
  },
});
