<template>
    <div class="h50vh">
        这是首页
        <BaseImage ref="imgRef" />
    </div>
</template>

<script lang="ts" setup>
const imgRef = ref<ComponentInstance['BaseImage']>()
</script>

<style lang="scss" scoped></style>
