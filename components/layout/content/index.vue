<template>
    <section class="py20px">
        <div class="container">
            <el-row :gutter="30">
                <el-col :xs="4" :sm="4" :md="5" :lg="6" :xl="6">
                    <div class="side-item">
                        <h3 class="co-main-bg-color p15px text-center text-20px font-bold c-white">
                            <ClientOnly>
                                {{ $lang(activeMenu?.title, activeMenu?.title_en) }}
                            </ClientOnly>
                        </h3>
                        <div class="side-bor">
                            <ClientOnly>
                                <ul class="side-ul">
                                    <li v-for="item in sideMenu" :key="item.id">
                                        <NuxtLinkLocale :to="setMenuLink(item)" :class="setMenuActiveClass(item)">
                                            {{ $lang(item.title, item.title_en) }}
                                        </NuxtLinkLocale>
                                    </li>
                                </ul>
                            </ClientOnly>
                        </div>
                    </div>
                    <div class="side-item mt20px">
                        <h3 class="co-main-bg-color px15px py10px text-14px font-bold c-white">
                            {{ $t('contactName') }}
                        </h3>
                        <div class="side-bor">
                            <div class="b-1px b-#ddd b-solid">
                                <img src="~/assets/images/custom-s.jpg" alt="">
                            </div>
                            <ul>
                                <li>
                                    {{ $lang(systemInfo?.title, systemInfo?.title_en) }}
                                </li>
                                <li>
                                    {{ $t('serverPhone') }}：{{ systemInfo?.phone }}
                                </li>
                                <li>
                                    {{ $t('addressName') }}：{{ $lang(systemInfo?.address, systemInfo?.address_en) }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="19" :lg="18" :xl="18">
                    <div class="co-main-bg-color flex items-center px15px py10px text-14px font-bold c-white">
                        {{ $t('site') }}：
                        <ClientOnly>
                            <el-breadcrumb class="bread-box">
                                <el-breadcrumb-item>
                                    <NuxtLinkLocale to="/">
                                        {{ $t('home') }}
                                    </NuxtLinkLocale>
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>
                                    <NuxtLinkLocale :to="activeMenu?.href">
                                        {{ $lang(activeMenu?.title, activeMenu?.title_en) }}
                                    </NuxtLinkLocale>
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </ClientOnly>
                    </div>
                    <div class="side-bor min-h-300px">
                        <slot />
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp()
const { activeMenu, menuList } = useMenuState()

const systemInfo = await useSystemState().getSystemInfo()
console.log(systemInfo)

const sideMenu = computed(() => {
    if (activeMenu.value?.children?.length) {
        return activeMenu.value?.children
    } else {
        return menuList.value.filter(item => !['/', '', null].includes(item.href))
    }
})

const id = useRouteQuery('id')

// 设置高亮菜单样式
const setMenuActiveClass = (row: IMenuListResponse) => {
    if (activeMenu.value?.children?.length) {
        if (Number(id.value) === row.id) {
            return 'active'
        } else {
            return ''
        }
    } else if (row.id === activeMenu.value?.id) {
        return 'active'
    }
    return ''
}

// 设置链接地址
const setMenuLink = (row: IMenuListResponse) => {
    if (activeMenu.value?.children?.length) {
        return `${activeMenu.value.href}?id=${row.id}`
    } else {
        return row.href
    }
}
</script>

<style lang="scss" scoped>
.side-bor {
    border: 1px solid #ddd;
    border-top: 0;
    padding: 15px;
}

.side-ul {

    li {
        margin: 10px 0;

        a {
            display: block;
            font-size: 14px;
            padding: 5px 10px;

            &:hover,
            &.active {
                background-color: var(--co-main-color);
                color: var(--el-color-white);
            }
        }
    }
}

.bread-box {
    --el-text-color-primary: var(--el-color-white);
    --el-text-color-regular: var(--el-color-success-light-9);
    --el-color-primary: var(--el-color-info-light-7);
    --el-text-color-placeholder: var(--el-color-white);
}
</style>
