<template>
    <div class="menu-box">
        <div class="container">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
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
        </div>
    </div>
</template>

<script lang="ts" setup>
const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
    console.warn(key, keyPath)
}
const goPage = (url: string) => {
    navigateTo(url)
}
</script>

<style lang="scss" scoped>
.menu-box {
  background-color: var(--el-color-primary);
  --el-menu-active-color: #f00;
  --el-menu-text-color: var(--el-color-white);
  --el-menu-hover-bg-color: transparent;
  --el-menu-hover-text-color: #f00
}

.el-menu {
  background-color: var(--el-color-primary);
  border-bottom: 0;

  .el-menu-item {
    font-size: 16px;
    border: 0 !important;

    &.is-active {
      border: 0;
    }
  }

}
</style>
