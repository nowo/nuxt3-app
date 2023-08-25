<template>
    <div class="layout-header-user flex items-center">
        <div class="layout-header-user-item mr10px" @click="onScreenFullClick">
            <i class="text-12px" :title="isFullscreen ? '关全屏' : '开全屏'"
                :class="!isFullscreen ? 'i-ic:baseline-fullscreen' : 'i-ic:baseline-fullscreen-exit'" />
        </div>
        <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
            <span class="flex items-center">
                <!-- <el-avatar v-if="userInfos.photo" :src="userInfos.photo" :size="2
                " class="mr5" /> -->
                <!-- <el-avatar icon="ele-UserFilled" :size="25" class="mr5" /> -->
                <el-avatar :size="25" class="mr5px">
                    <i class="i-ep-user-filled" />
                </el-avatar>
                超级管理员
                <i class="i-ep-arrow-down" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="/">
                        首页
                    </el-dropdown-item>
                    <el-dropdown-item command="change">
                        修改密码
                    </el-dropdown-item>
                    <!-- <el-dropdown-item command="clear">
                        清空后台缓存
                    </el-dropdown-item> -->
                    <!-- <el-dropdown-item command="/401">401</el-dropdown-item> -->
                    <el-dropdown-item divided command="logOut">
                        退出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts" setup>
// 全屏点击时
const { isSupported, isFullscreen, toggle } = useFullscreen()
const onScreenFullClick = () => {
    if (!isSupported) return ElMessage.warning('暂不不支持全屏')
    toggle() // 全屏切换
    // state.isScreenFull = !isFullscreen.value
}

const onHandleCommandClick = (name: string) => {
    console.log(name)
}
</script>

<style lang="scss" scoped>
.layout-header-user {
    height: 100%;

    &-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        &:hover{
            background-color: var(--el-fill-color-light);
        }
    }
}
</style>
