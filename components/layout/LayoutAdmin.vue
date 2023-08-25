<template>
    <el-container class="h100vh">
        <el-aside width="200px">
            <LayoutAside />
        </el-aside>
        <el-container>
            <el-header class="w100% bg-white">
                <LayoutHeader />
            </el-header>
            <el-scrollbar class="flex-1">
                <el-main>
                    <div class="min-h100% bg-white">
                        <slot />
                        <div>1234564</div>
                    </div>
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
