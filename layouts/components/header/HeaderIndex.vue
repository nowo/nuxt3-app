<script lang="ts" setup>
import HeaderClassify from './HeaderClassify.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderBanner from './HeaderBanner.vue'
import HeaderUser from './HeaderUser.vue'
const route = useRoute()

// 判断是否为首页，显示首页模块头部内容
const isIndex = computed(() => {
  return route.path === '/'
})
</script>

<template>
  <div class="nav-banner" :class="{ index: isIndex }">
    <div class="nav">
      <div class="container flex">
        <div class="left-box">
          <HeaderClassify />
        </div>
        <HeaderMenu />
      </div>
    </div>
    <div v-if="isIndex" class="banner">
      <div class="container flex h520px">
        <div class="left-box">
          <!-- 占位 -->
        </div>
        <div class="swp">
          <HeaderBanner />
        </div>
        <div class="right">
          <HeaderUser />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-banner {
  --banner-left-width: 230px;
  --banner-right-width: 250px;
  --banner-width: 700px;
  --banner-height: 520px;
  border-bottom: 1px solid var(--el-color-primary);
  &.index {
    border-bottom: 0;
    :deep(.goods-class-child) {
      display: block !important;
    }

  }

  .left-box {
    width: var(--banner-left-width);
    position: relative;
  }

  .swp {
    width: var(--banner-width);
    height: 100%;
  }

  .right {
    width: var(--banner-right-width);
    height: 100%;
    background-color: var(--el-color-white);
  }

  .nav {
    position: relative;
    z-index: 10;
  }

  .banner {
    height: var(--banner-height);
  }
}
</style>
