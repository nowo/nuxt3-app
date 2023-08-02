<template>
    <section class="header-top bg-#313131 py5px">
        <div class="text-right text-#fff container">
            <el-button link>
                <i class="i-ep-location-information" />
                <span>广东省/深圳市</span>
            </el-button>
            <el-divider direction="vertical" />
            <el-button link>
                <i class="i-ep-user" />
                <span>登录</span>
            </el-button>
            <el-divider direction="vertical" />
            <el-button link>
                <span>注册</span>
            </el-button>
            <el-divider direction="vertical" />
            <el-button link>
                <span>企业购</span>
            </el-button>
            <el-divider direction="vertical" />
            <el-button link>
                <i class="i-ep-shopping-cart-full" />
                <span>购物车（0）</span>
            </el-button>
            <el-divider direction="vertical" />
            <el-button link readonly>
                <span>010-56003254568</span>
            </el-button>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header-top {
  .el-button {
    --el-button-text-color: #fff;
  }
}
</style>
