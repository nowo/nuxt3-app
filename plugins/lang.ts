export default defineNuxtPlugin(() => {
    return {
        provide: {
            lang: (cn: string | null, en: string | null) => {
                const { locale } = useI18n()
                if (locale.value === 'en') return en
                return cn
            },
        },
    }
})
