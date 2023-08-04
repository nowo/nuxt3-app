export default defineI18nConfig(() => ({
    legacy: false,
    // locale: 'en',
    locales: ['zh', 'en'], // used in URL path prefix
    defaultLocale: 'zh', // default locale of your project for Nuxt pages and routings
    // strategy: 'prefix_except_default',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root', // recommended
    },
    messages: {
        zh: {
            welcome: '欢迎',
        },
        en: {
            welcome: 'Welcome',
        },

    },

}))
