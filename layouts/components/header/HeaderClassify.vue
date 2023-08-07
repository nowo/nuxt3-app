<!-- 商品分类 -->
<template>
    <div class="goods-class-tle">
        <i class="i-carbon-list" />
        <span class="ml8px">商品分类</span>
        <ul class="goods-class-child">
            <li>
                <NuxtLink to="/" @mouseenter="showGoodsPane()">
                    <i class="i-ep-service" />
                    <span>商品分类</span>
                </NuxtLink>
                <div class="goods-class-pane">
                    <el-form-item label="硬度计">
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                    </el-form-item>
                </div>
            </li>
            <li>
                <NuxtLink to="/">
                    <i class="i-ep-service" />
                    <span>商品分类</span>
                </NuxtLink>
                <div class="goods-class-pane top-0">
                    112
                </div>
            </li>
            <li>
                <NuxtLink to="/">
                    <i class="i-ep-service" />
                    <span>商品分类</span>
                </NuxtLink>
                <div class="goods-class-pane">
                    <el-form-item label="硬度计">
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <i class="i-ep-service" />
                            <span>商品分类</span>
                        </NuxtLink>
                    </el-form-item>
                </div>
            </li>
            <li>
                <NuxtLink to="/">
                    <i class="i-ep-service" />
                    <span>商品分类</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const defData = reactive({
    active: -1,
    show: false,
})

const showGoodsPane = () => {

}
</script>

<style lang="scss" scoped>
.goods-class-tle {
  width: 100%;
  height: 100%;
  background: var(--el-color-primary);
  color: var(--el-color-white);
  display: flex;
  align-items: center;
  padding: 5px 10px;

  &:hover .goods-class-child {
    display: block;
  }
}

.goods-class-child {
  width: 100%;
  height: var(--banner-height);
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--el-color-white);
  color: #333;
  display: none;

  li>a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 15px;

    i {
      margin-right: 5px;
    }
  }

  li:hover {
    background-color: var(--el-color-info-light-8);

    .goods-class-pane {
      display: block;
    }
  }
}

.goods-class-pane {
  position: absolute;
  top: 0;
  left: 100%;
  width: var(--banner-width);
  height: var(--banner-height);
  background-color: #fff;
  display: none;
}
</style>
