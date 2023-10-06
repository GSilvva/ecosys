// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover',
      title: 'Ecosys Auto | Comprar e vender seu carro seminovo e usado',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        {
          name: 'description',
          content: 'Comprar e vender seu carro seminovo e usado'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Ecosys Auto'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Comprar e vender seu carro seminovo e usado'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/opengraph.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://ecosysauto.com.br/'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&display=swap',
          crossorigin: ''
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
        }
      ],
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  css:[
		"@/assets/scss/main.scss"
	],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/tools.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL_API
    }
  },
});
