export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'waltid-issuer-portal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/core.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/animations.css",
    "@/assets/css/bootstrap-icons.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap',
    '@/plugins/bootstrap-script'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  /*buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],*/

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/auth",
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    // '/issuer-api/': 'https://wallet.waltid.org',
    // '/onboarding-api/': 'https://wallet.waltid.org',
    // '/api/': 'https://wallet.waltid.org'
     '/issuer-api/': 'http://localhost:8080/',
     '/onboarding-api/': 'http://localhost:8080/',
     '/api/': 'http://localhost:8080/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: false,
        endpoints: {
          login: { url: "api/auth/login", method: "post" },
          user: { url: "api/auth/userInfo", method: "get" },
          logout: false
        }
      },
      redirect: {
        login: '/login',
        logout: '/logout',
        home: '/',
        
      }
    }
  },

  i18n: {
    /* module options */
    langDir: '~/locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', flag: 'flag-en.svg' },
      { code: 'de', iso: 'de-DE', file: 'de.js', flag: 'flag-de.svg' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js', flag: 'flag-fr.svg' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  router: {
    middleware: ["auth"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  },

  ssr: false,
  server: {
    port: 8000
  }
}
