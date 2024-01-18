export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Timothy Adams",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Get to know Timothy Adams' professionally. From experience to projects, find it all here.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    /* "@/assets/css/patterns.css" */
  ],

  // Plugins to run before rendering page: https://go.nuxtj/s.dev/config-plugins
  plugins: [{ src: "@/plugins/aos.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components" /* "~/components/svg" */],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 5000,
  },

  // use tailwind config instead to access tailwind intellisense
  // tailwindcss: {
  //   config: {
  //     theme: {
  //       extend: {
  //         colors: {},
  //       },
  //     },
  //     plugins: [require("@tailwindcss/typography"), require("daisyui")],
  //     daisyui: {
  //       themes: ["cupcake", "synthwave", "aqua"],
  //     },
  //   },
  // },

  target: "static",
};
