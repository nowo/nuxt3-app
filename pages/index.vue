<template>
    <div class="index-box">
        <Suspense>
            <ClientOnly>
                <!-- <HomeBanner /> -->
                <!-- <HomeMain /> -->
                <div class="min-h500px">
                    index page
                </div>
            </ClientOnly>
            <template #fallback>
                <div italic op50>
                    <span animate-pulse>Loading...</span>
                </div>
            </template>
        </Suspense>
        <!-- <InputEntry />
    <div class="a">
      {{ name }}
      <span>-123456</span>
    </div> -->
    </div>
</template>

<script setup lang="ts">
// import { HomeMain } from '~~/.nuxt/components';

const online = useOnline()
const name = ref('张三')
const route = useRoute<'index___cn'>()

console.log(route.query)

definePageMeta({
    layout: 'home',
})
</script>

<style lang="scss" scoped>
.index-box {
    padding-top: 40px;
    background-color: #f3f3f3;
}
</style>
