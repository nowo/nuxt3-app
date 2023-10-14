<!-- 导航菜单 -->
<template>
    <el-menu class="menu-box flex-1" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goPage('/')">
            工游记首页
        </el-menu-item>
        <el-menu-item index="2" @click="goPage('/goods/list')">
            品牌导航
        </el-menu-item>
        <el-menu-item index="3" @click="goPage('/goods/detail')">
            行家精选
        </el-menu-item>
        <el-menu-item index="4">
            清仓特卖
        </el-menu-item>
        <el-menu-item index="15">
            低价好货
        </el-menu-item>
        <el-menu-item index="6">
            内容资讯
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const goPage = (url: string) => {
    navigateTo(url)
}
</script>

<style lang="scss" scoped>
.menu-box {
    --el-menu-item-height: 48px;
    --el-menu-border-color: transparent;
    --el-menu-bg-color: transparent;
    --el-menu-text-color: var(--el-color-white);
    --el-menu-hover-bg-color: transparent;

    &.el-menu--horizontal {
        border-bottom: 0;
    }

    .el-menu-item {
        font-size: 16px;
        border: 0 !important;

        &.is-active {
            border: 0;
        }
    }
}
</style>
