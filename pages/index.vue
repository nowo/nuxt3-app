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
          <div class="a">
            {{ name }}
          </div>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
