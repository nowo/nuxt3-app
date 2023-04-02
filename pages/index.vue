<script setup lang="ts">
const online = useOnline()
const name = ref('张三')
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />

        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry /><div class="a">
      {{ name }}
      <span>-123456</span>
    </div>
  </div>
</template>

<style  lang="scss">
.a{
    color: #f00;

    font-size: 36px;

    span{
        color: #ef0;
    }

}
</style>
