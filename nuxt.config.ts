// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/test-utils",
  ],

  css: [
    "~/assets/css/reset.css",
    "~/assets/css/variables.css",
    "~/assets/css/global.css",
  ],
});
