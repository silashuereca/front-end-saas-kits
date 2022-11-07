// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { routes } from "./router";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  hooks: {
    "pages:extend"(router) {
      router.push(...routes);
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  plugins: [{ mode: "client", src: "./plugins/apollo-setup.ts" }],
});
