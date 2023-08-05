// import { pwa } from './config/pwa'
import { resolve } from 'node:path'
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
        '@hebilicious/authjs-nuxt',
        '@nuxtjs/i18n',
    ],
    alias: {
        'cookie': resolve(__dirname, 'node_modules/cookie'),
        'jose': resolve(__dirname, 'node_modules/jose/dist/browser/index.js'),
        '@panva/hkdf': resolve(__dirname, 'node_modules/@panva/hkdf/dist/web/index.js'),
    },
    experimental: {
        // when using generate, payload js assets included in sw precache manifest
        // but missing on offline, disabling extraction it until fixed
        payloadExtraction: false,
        inlineSSRStyles: false,
        typedPages: true,
    },
    // css: [
    //   '@unocss/reset/tailwind.css',
    //   '~/assets/scss/app.scss',
    // ],
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
            // routes: ['/'],
            // ignore: ['/hi'],
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
        plugins: [
        ],
        // css: {
        //   preprocessorOptions: {
        //     scss: {
        //       additionalData: '@use "~/assets/scss/default.scss" as *;', // 注意文件路径要配成自己的
        //     },
        //   },
        // },

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
        authJs: {
            secret: process.env.NUXT_AUTH_SECRET, // You can generate one with `openssl rand -base64 32`
        },
        // public里的在服务端serve,客户端client皆可访问
        public: {
            baseUrl: process.env.VITE_BASE_URL || '/',
            apiBase: process.env.VITE_API_BASE || '',
            otherUrl: process.env.OTHER_URL || 'default_other_url',

            secret: process.env.NUXT_AUTH_SECRET, // You can generate one with `openssl rand -base64 32`

            authJs: {
                // baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
                verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
            },
        },
    },

    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json',
            },
            {
                code: 'zh',
                name: '简体中文',
                file: 'zh-CN.json',
            },
            // {
            //   code: 'fr',
            //   file: 'fr-FR.ts'
            // }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'zh', // default locale of your project for Nuxt pages and routings
        // strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
            alwaysRedirect: true,
            // fallbackLocale: 'zh',
        },
    },
})
