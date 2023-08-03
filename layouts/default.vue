<template>
    <main class="px-10 py-20 text-center">
        <el-button>我是 ElButton</el-button>
        <slot />

        <div class="mx-auto mt-5 text-center text-sm opacity-25">
            [Default Layout]
            <BaseFooter />
        </div>
    </main>
</template>

<script setup lang="ts">
import BaseFooter from './components/BaseFooter.vue'
</script>
