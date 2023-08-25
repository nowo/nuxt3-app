<template>
    <el-tabs v-model="activeName" tab-position="left">
        <el-tab-pane label="基本设置" value="1">
            基本设置
        </el-tab-pane>
        <el-tab-pane label="公司介绍" value="2">
            Config
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
definePageMeta({
    // middleware: 'auth',
    // auth: { guestRedirectTo: '/login' },
    layout: 'admin',
})

const activeName = ref('1')
</script>

<style lang="scss" scoped></style>
