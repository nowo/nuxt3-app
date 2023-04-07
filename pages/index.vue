<script setup lang="ts">
// import { HomeMain } from '~~/.nuxt/components';

const online = useOnline()
const name = ref('张三')

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div class="index-box">
    <Suspense>
      <ClientOnly>
        <!-- <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div> -->
        <!-- <HomeBanner /> -->
        <HomeMain />
      </ClientOnly>
      <template #fallback>
        <div op50 italic>
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

<style  lang="scss" scoped>
.index-box{
  padding-top: 40px;
  background-color: #f3f3f3;
}
</style>
