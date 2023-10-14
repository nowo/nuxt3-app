<template>
    <div class="">
        <div class="container">
            <div class="goods-best">
                <div class="goods-best-tle">
                    <div class="lt">
                        新品优选<sub>明星产品，趋势热销</sub>
                    </div>
                    <NuxtLink>
                        <el-button link>
                            更多
                            <i class="i-ep-arrow-right" />
                        </el-button>
                    </NuxtLink>
                </div>
                <ul class="goods-best-list">
                    <li v-for="(o, index) in 5" :key="o">
                        <NuxtLink class="link">
                            <el-image class="h150px w150px" src="~/assets/images/goods1.png">
                                <template #error>
                                    <div class="image-err">
                                        <i class="i-ep-picture" />
                                    </div>
                                </template>
                            </el-image>
                            <h3>工游记 一键测量仪{{ index }}</h3>
                            <div class="price">
                                <span>惊爆价</span>
                                <em>￥200.5</em>
                            </div>
                            <el-button text bg type="danger">
                                大热卖推荐
                            </el-button>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="floor-box">
                <div class="floor-item">
                    <div class="left">
                        <h3 class="tle">
                            测量仪器
                        </h3>
                        <ul class="class-list">
                            <li>
                                <el-button round>
                                    工业检测
                                </el-button>
                            </li>
                            <li>
                                <el-button round>
                                    工业检测
                                </el-button>
                            </li>
                            <li>
                                <el-button round>
                                    工业检测
                                </el-button>
                            </li>
                        </ul>
                        <img class="absolute left-0 top-0 h100% w99% object-cover -z-1" src="~/assets/images/floor1.png"
                            alt="">
                    </div>
                    <div class="right">
                        <el-tabs v-model="tableActive" class="tabs-box">
                            <el-tab-pane label="断路器" name="1">
                                <ul class="goods-list">
                                    <li v-for="item in 10" :key="item">
                                        <NuxtLink class="link">
                                            <div class="im-box">
                                                <img src="~/assets/images/goods1.png" alt="">
                                            </div>
                                            <!-- <el-image class="w150px h150px" src="~/assets/images/goods1.png">
                        <template #error>
                          <div class="image-err">
                                        <i class="i-ep-picture" />
                                      </div>
                                    </template>
                                  </el-image> -->
                                            <h3>工游记 一键测量仪</h3>
                                            <div class="price">
                                                <span>惊爆价</span>
                                                <em>￥200.5</em>
                                            </div>
                                            <el-button text bg type="danger">
                                                大热卖推荐
                                            </el-button>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="继电器" name="2">
                                Config
                            </el-tab-pane>
                            <el-tab-pane label="断路器" name="3">
                                Role
                            </el-tab-pane>
                            <el-tab-pane label="断路器" name="4">
                                Task
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="brand-list">
                        <img class="h80px" src="~/assets/images/goods1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tableActive = ref('1')
</script>

<style lang="scss" scoped>
.goods-best {
    background-color: var(--el-color-white);
    padding: 20px;
}

.goods-best-tle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    .lt {
        font-weight: bold;
        font-size: 22px;
        color: var(--el-text-color-regular);

        sub {
            margin-left: 5px;
            font-weight: normal;
        }
    }
}

.goods-best-list {
    display: flex;
    flex-wrap: wrap;

    >li {
        width: 20%;
        padding: 10px;
    }

    .link {
        display: block;
        height: 100%;
        text-align: center;
        padding: 15px;

        &:hover {
            box-shadow: 0 0 10px #eee;
        }
    }
}

.floor-box {}

.floor-item {
    --floor-left-width: 230px;
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;

    .brand-list {
        width: 100%;
        padding: 10px;
        background-color: #1d1d1f;
        border-left: 10px solid var(--el-color-primary);
        border-right: 10px solid var(--el-color-primary);
        margin-top: 10px;
    }

    .left {
        width: var(--floor-left-width);
        color: var(--el-color-white);
        min-height: 560px;
        position: relative;
        z-index: 1;

        .tle {
            font-size: 28px;
            padding: 30px 10px 20px 20px;
        }
    }

    .class-list {
        padding: 0 20px;

        .el-button {
            margin: 5px;
            --el-button-bg-color: transparent;

            --el-button-text-color: var(--el-color-white);
            --el-button-hover-bg-color: transparent;
        }
    }

    .right {
        width: calc(100% - var(--floor-left-width));
        background: var(--el-color-white);
    }

    .tabs-box {
        --el-border-color-light: var(--m-body-bg-color);
        height: 100%;

        :deep(.el-tabs__header) {
            margin: 0;

            .el-tabs__item.is-top:nth-child(2) {
                padding-left: 20px;
            }
        }

        :deep(.el-tabs__content) {
            height: calc(100% - var(--el-tabs-header-height));

            .el-tab-pane {
                height: 100%;
            }
        }

        // &.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        //   padding-left: 20px;
        // }
    }

    .goods-list {
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        li {
            width: 20%;
            height: 50%;
            border-top: 2px solid var(--m-body-bg-color);
            border-right: 2px solid var(--m-body-bg-color);

            &:nth-child(5n) {
                border-right: 0;
            }

            a {
                display: block;
                height: 100%;
                padding: 15px;
                text-align: center;

                &:hover {
                    box-shadow: 3px 3px 10px #d8d8d8;
                }

                .im-box {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 100%;

                    >img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>
