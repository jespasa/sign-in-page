// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "My SignIn Page",
      meta: [
        {
          name: "description",
          content:
            "Aplicación web sencilla y segura que permite a los usuarios iniciar sesión para acceder a sus cuentas, protegiendo su información personal y facilitando el acceso a los servicios ofrecidos.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
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
