// import { pwa } from './config/pwa'
import { appDescription } from './config/constant'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/devtools',
    '@element-plus/nuxt',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/scss/app.scss',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  // pwa,
  vite: {

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/default.scss" as *;', // 注意文件路径要配成自己的
        },
      },
    },

    server: {
      proxy: {
        '/apis': {
          target: 'http://xxxxxxxx',
          rewrite: path => path.replace(/^\/apis/, ''),
        },
      },
    },
  },
  runtimeConfig: {
    // 仅在服务端serve可以访问
    appKey: 'abcd',
    // public里的在服务端serve,客户端client皆可访问
    public: {
      baseUrl: process.env.VITE_BASE_URL || '/',
      apiBase: process.env.VITE_API_BASE || '',
      otherUrl: process.env.OTHER_URL || 'default_other_url',
    },
  },
})
