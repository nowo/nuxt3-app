export default defineNuxtPlugin(() => {
    return {
        provide: {
            lang: (cn: string | null | undefined, en: string | null | undefined) => {
                const { locale } = useI18n()
                if (locale.value === 'en') return en
                return cn
            },
        },
    }
})
