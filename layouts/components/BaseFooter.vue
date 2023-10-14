<template>
    <div class="footer-box bg-#333">
        <div class="container">
            <div class="top">
                设置
            </div>
            <div class="mid">
                <ul class="footer-link">
                    <li>
                        <dl>
                            <dt>购物指南</dt>
                            <dd><a href="/help/orders.html" target="_blank">帮助中心</a></dd>
                            <dd><a href="/brand.html" target="_blank">品牌中心</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>付款方式</dt>
                            <dd>
                                <a href="/help/payments.html" target="_blank">付款开票信息</a>
                            </dd>
                            <dd>
                                <a href="/help/payments.html" target="_blank">如何支付</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>服务政策</dt>
                            <dd>
                                <a href="/help/shipping-inspections.html#section1" target="_blank">配送服务</a>
                            </dd>
                            <dd>
                                <a href="/help/returns-replacements.html" target="_blank">售后服务</a>
                            </dd>
                            <dd>
                                <a href="/help/terms/privacy.html" target="_blank">隐私政策</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>
                                <a href="/content/" target="_blank">内容中心</a>
                            </dt>
                            <dd>
                                <a href="/content/list/c-10010.html" target="_blank">震坤行大事件</a>
                            </dd>
                            <dd>
                                <a href="/content/list/c-10009.html" target="_blank">客户之声</a>
                            </dd>
                            <dd>
                                <a href="/content/list/c-10004.html" target="_blank">知识社区</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>关于我们</dt>
                            <dd>
                                <a href="/help/about-us.html" target="_blank">公司介绍</a>
                            </dd>
                            <dd>
                                <a href="/help/contact-us.html" target="_blank">联系我们</a>
                            </dd>
                            <dd>
                                <a href="http://imart360.zhiye.com/home" target="_blank" rel="nofollow">加入我们</a>
                            </dd>
                            <dd>
                                <a href="/roadmap.html" target="_blank" rel="nofollow">网站导航</a>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bot">
            <div class="flex justify-between container">
                <div class="left">
                    <NuxtLink class="mr5px">
                        隐私政策
                    </NuxtLink>
                    <NuxtLink class="mr5px">
                        用户协议
                    </NuxtLink>
                    <NuxtLink class="mr5px">
                        网站导航
                    </NuxtLink>
                </div>
                <div class="right">
                    Copyright@2023 工游记工业科技（深圳）有限公司 版权所有
                    粤ICP备18004771号-1
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer-box {
    color: #fff;
    padding-top: 50px;

    .top {
        padding: 10px;
    }

    .mid {
        padding-bottom: 30px;
        border-bottom: 1px solid #555;
    }

    .footer-bot {
        font-size: 14px;
        padding: 15px 0;
        border-bottom: 5px solid var(--el-color-primary-light-3);
    }
}

.footer-link {
    display: flex;

    li {
        width: 130px;

        dt {
            font-weight: bold;
        }

        dd {
            font-size: 14px;
            color: #ccc;
            margin: 5px 0;
        }
    }
}
</style>
