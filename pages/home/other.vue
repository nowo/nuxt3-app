<template>
    <div>
        <!-- <form>
            <select v-model="locale" @change="setLocale(locale)">
                <option value="zh">
                    简体中文
                </option>
                <option value="en">
                    en
                </option>
            </select>
            <p>{{ $t('welcome') }}</p>
        </form> -->
        <p>
            {{ $t('welcome') }}，{{ $t('hello', { name: $t('welcome') }) }}
        </p>

        <h3>
            <NuxtLink v-for="item in availableLocales" :key="item.code" :to="switchLocalePath(item.code)">
                {{
                    item.name
                }}
            </NuxtLink>
        </h3>
        <div>
            <NuxtLink :to="localePath('/')">
                简体中文
            </NuxtLink>

            <NuxtLink :to="localePath('index', 'en')">
                English
            </NuxtLink>
        </div>
        <el-button @click="onTest">
            md5加密
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const switchLocalePath = useSwitchLocalePath()
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
    console.log(locales.value)
    return (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
})

const runtimeConfig = useRuntimeConfig()
const onTest = () => {
    const _t = new Date().getTime()

    setSignRule(runtimeConfig.public.secret, _t.toString())

    console.log(useRouter().getRoutes())

    console.log(locale)
    console.log(locales)
}
</script>

<style lang="scss" scoped></style>
