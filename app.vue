<template>
    <el-config-provider :locale="locale">
        <VitePwaManifest />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { appName } from '~/config/constant'

import '~/assets/scss/default.scss'

// import '@unocss/reset/tailwind.css'
// import '~/assets/scss/app.scss'

const locale = ref(zhCn)

console.log(useRouter().getRoutes())

// let a = -1
// if (a > 0){ a++}

// console.log('a :>> ', a);

useHead({
    title: appName,
})
</script>

<style lang="scss">
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
    // background: $bgColor;
}

html.dark {
    background: #333;
    color: white;
}
</style>
