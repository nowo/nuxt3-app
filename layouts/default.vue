<script setup lang="ts">
import BaseFooter from './components/BaseFooter.vue'
</script>

<template>
  <main class="py-20 px-10 text-center">
    <el-button>我是 ElButton</el-button>
    <slot />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
      <BaseFooter />
    </div>
  </main>
</template>
