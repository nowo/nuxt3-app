<template>
    <div>
        {{ route.params.id }}
    </div>
</template>

<script lang="ts" setup>
const route = useRoute<'login-id___cn'>()
console.log(route.params.id)
</script>

<style lang="scss" scoped></style>
