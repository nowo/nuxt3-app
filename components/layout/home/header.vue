<template>
    <section>
        <div class="header-top py10px">
            <div class="flex items-center justify-between container">
                <NuxtLinkLocale to="/" class="logo">
                    <img :src="systemInfo?.logo" class="max-h60px" alt="">
                </NuxtLinkLocale>
                <div class="right">
                    <div class="phone flex items-center">
                        <div class="icon mr10px">
                            <i class="i-carbon:phone-filled" />
                        </div>
                        <div class="c-#005a7f">
                            全国咨询热线：<br>
                            <span class="font-bold">{{ systemInfo?.phone }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <div class="container">
                <ul class="header-menu-ul flex">
                    <li v-for="item in menuList" :key="item.id" class="flex-1">
                        <NuxtLinkLocale :to="item.href" class="header-link">
                            <!-- {{ item.title }} -->
                            <!-- {{ setLangText(item.title, item.title_en) }} -->
                            <!-- {{ $t() }} -->
                            {{ $lang(item.title, item.title_en) }}
                        </NuxtLinkLocale>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// setLangText()
const { $lang } = useNuxtApp()
const systemInfo = await useSystemState().getSystemInfo()
// console.log(dat)

const menuList = await useMenuState().getMenuList()
// console.log("🚀 ~ file: header.vue:21 ~ menuList:", menuList)
</script>

<style lang="scss" scoped>
.header-menu {
    background-color: var(--co-main-color);
    color: var(--co-white-color)
}

.phone {
    .icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--co-main-color);
        border: 2px solid var(--co-main-color);
        border-radius: 50%;
        font-size: 20px;
    }
}

.header-menu-ul {
    text-align: center;

    li {
        position: relative;

        &::after {
            content: '';
            width: 1px;
            height: 60%;
            background-color: var(--co-white-color);
            position: absolute;
            top: 20%;
            right: 0;
        }

        &:last-child::after {
            content: unset;
        }
    }
}

.header-link {
    line-height: 46px;
    display: inline-block;
    font-weight: bold;
}
</style>
