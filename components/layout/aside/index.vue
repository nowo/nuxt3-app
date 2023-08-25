<template>
    <div class="layout-aside h100% flex flex-col">
        <LayoutAsideLogo />
        <el-scrollbar class="flex-1">
            <el-menu :collapse="isCollapse" :default-active="$route.path" router>
                <LayoutAsideMenu :child="menuList" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
const isCollapse = ref(false)

const menuList = ref<LayoutMenuItem[]>([
    {
        name: '网站首页',
        path: '/admin',
        icon: 'i-ep-house',
    },
    // /////////

    {
        name: '网站菜单',
        path: '/admin/menu',
        icon: 'i-ep-house',
    },

    // /////////
    {
        name: '系统用户',
        path: '/admin/user',
        icon: 'i-ep-house',
    },
    {
        name: '网站设置',
        path: '/admin/system',
        icon: 'i-ep-house',
    },
])
</script>

<style lang="scss" scoped>
.layout-aside {
    --el-menu-bg-color: var(--el-text-color-primary);
    --el-menu-hover-bg-color: rgb(67, 74, 80);
    --el-menu-text-color: var(--el-color-white);
    background-color: var(--el-menu-bg-color);
}

// .layout-menu{
//     --el-menu-bg-color: #545c64;
//     --el-menu-hover-bg-color: rgb(67, 74, 80);
// }
</style>
