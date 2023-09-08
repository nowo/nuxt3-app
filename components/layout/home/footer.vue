<template>
    <section class="footer bg-#333">
        <div class="py20px text-16px">
            <div class="container">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <NuxtLinkLocale to="/" class="mr20px">
                            <img :src="systemInfo?.logo" class="max-w350px" alt="">
                        </NuxtLinkLocale>
                        <div class="lh-28px">
                            <p>{{ $lang('联系电话', 'Telephone') }}：{{ systemInfo?.phone }}</p>
                            <p>{{ $lang('联系地址', 'Address') }}：{{ $lang(systemInfo?.address, systemInfo?.address_en) }}</p>
                        </div>
                    </div>
                    <div class="flex items-start text-46px">
                        <a :href="qqLink">
                            <i class="i-mdi:qqchat block" />
                        </a>
                        <a class="wx-code ml10px">
                            <i class="i-mdi:wechat block" />
                            <div v-if="systemInfo?.qrCode" class="wx-img">
                                <img :src="systemInfo?.qrCode" class="h100px w100px" alt="">
                            </div>
                        </a>
                    </div>
                </div>
                <div class="pt15px text-13px">
                    {{ $lang('友情链接', 'Links') }}：
                    <a v-for="item in links" :key="item.id" :href="item.href" target="_blank" class="mr5px">
                        {{ $lang(item.title, item.title_en) }}
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bot b-t b-t-#222 b-t-solid py15px">
            <div class="c-#bbb container">
                <span class="mr8px">{{ $lang(systemInfo?.copyright, systemInfo?.copyright_en) }}</span>
                <span>{{ $lang(systemInfo?.filing, systemInfo?.filing_en) }}</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp()
const systemInfo = await useSystemState().getSystemInfo()

const qqLink = computed(() => {
    if (systemInfo.value?.qq) {
        return `http://wpa.qq.com/msgrd?v=3&uin=${systemInfo.value.qq}&site=qq&menu=yes`
    } else {
        return 'javascript:;'
    }
})
// console.log(dat)

const { data: links } = await useCustomFetch<ISlideListResponse[]>('/api/page/get_links', {
    params: {
        type: 2,
    },
})
</script>

<style lang="scss" scoped>
.footer {
    font-size: 14px;
    color: #eee;
}

.wx-code {
    position: relative;
    cursor: pointer;

    .wx-img {
        // width: 120px;
        // height: 120px;
        position: absolute;
        bottom: 55px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--co-white-color);
        border-radius: 5px;
        padding: 10px;
        display: none;

        &::after {
            content: "";
            border: 10px solid transparent;
            border-top-color: var(--co-white-color);
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover {
        .wx-img {
            display: block;
        }
    }
}
</style>
