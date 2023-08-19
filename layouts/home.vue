<template>
    <main>
        <NuxtLink v-for="item in availableLocales" :key="item.code" :to="switchLocalePath(item.code)">
            {{
                item.name
            }}
        </NuxtLink>
        <BaseTop />
        <BaseHeader />
        <!-- <BaseMenu /> -->
        <slot />

        <div class="mx-auto text-center text-sm opacity-25">
            [Home Layout]
        </div>
        <BaseFooter />
    </main>
</template>

<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import BaseFooter from './components/BaseFooter.vue'
import BaseHeader from './components/BaseHeader.vue'

// import BaseMenu from './components/BaseMenu.vue'
import BaseTop from './components/BaseTop.vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    console.log(locales.value)
    return (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
})
</script>
