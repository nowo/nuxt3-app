<template>
    <div>
        <form>
            <select v-model="locale">
                <option value="zh">
                    简体中文
                </option>
                <option value="en">
                    en
                </option>
            </select>
            <p>{{ $t('welcome') }}</p>
        </form>
        <p>{{ $t('welcome') }}</p>
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
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const localePath = useLocalePath()

const runtimeConfig = useRuntimeConfig()
const onTest = () => {
    const _t = new Date().getTime()

    setSignRule(runtimeConfig.public.secret, _t.toString())

    console.log(locale)
}
</script>

<style lang="scss" scoped></style>
