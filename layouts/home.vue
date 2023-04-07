<script lang="ts" setup>
import BaseFooter from './components/BaseFooter.vue'
import BaseHeader from './components/BaseHeader.vue'
// import BaseMenu from './components/BaseMenu.vue'
import BaseTop from './components/BaseTop.vue'
</script>

<template>
  <main>
    <BaseTop />
    <BaseHeader />
    <!-- <BaseMenu /> -->
    <slot />

    <div class=" mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div>
    <BaseFooter />
  </main>
</template>
