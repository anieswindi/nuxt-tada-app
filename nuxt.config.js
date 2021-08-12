export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-tada-app",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//unpkg.com/bootstrap/dist/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "/vendor/jquery/jquery.min.js"
      },
      {
        src: "/vendor/bootstrap/js/bootstrap.bundle.min.js"
      },
      {
        src: "/vendor/jquery-easing/jquery.easing.min.js"
      },
      {
        src: "/js/sb-admin-2.min.js"
      },
      {
        src: "//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/vendor/fontawesome-free/css/all.min.css",
    "@/assets/css/sb-admin-2.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/auth", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
