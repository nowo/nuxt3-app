<!-- 商品分类 -->
<template>
    <div class="goods-class">
        <div class="goods-class-tle">
            <i class="i-carbon-list" />
            商品分类
        </div>
        <ul class="goods-class-list">
            <li>a</li>
        </ul>
        <div class="goods-class-child">
            1
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.goods-class {
    height: 100%;
    position: relative;
    z-index: 5;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid var(--el-color-primary);
        background-color: var(--el-color-white);
        z-index: -1;
    }
}

.goods-class-tle {
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
    padding: 5px;
    display: flex;
    align-items: center;

    > i {
        display: inline-block;
        margin-right: 5px;
    }
}

.goods-class-list {
    li {
        padding: 5px;
    }
}

.goods-class-child {
    position: absolute;
    top: 0;
    left: 100%;
    width: 600px;
    height: 100%;
    background: var(--el-color-white);
    z-index: 10;
    overflow: auto;
}
</style>
