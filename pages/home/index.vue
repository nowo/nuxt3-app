<template>
    <div class="h50vh">
        这是首页
        <CoImage ref="imgRef" />
    </div>
</template>

<script lang="ts" setup>
const imgRef = ref<ComponentInstance['CoImage']>()
</script>

<style lang="scss" scoped></style>
