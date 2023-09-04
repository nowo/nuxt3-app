<template>
    <div class="banner">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]" :slides-per-view="1"
            :loop="true" :autoplay="{ delay: 8000, disableOnInteraction: true }" effect="creative" :creative-effect="effect"
            navigation :pagination="{ clickable: true }">
            <SwiperSlide v-for="(item, idx) in banner" :key="idx" class="w100%">
                <NuxtLink :to="item.href" class="banner-link">
                    <img :src="item.img" :alt="item.title">
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script lang="ts" setup>
// :creative-effect="{
//             prev: {
//                 shadow: false,
//                 translate: ['-20%', 0, -1]
//             },
//             next: { translate: ['100%', 0, 0] }
//         }"

const effect = {
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: { translate: ['100%', 0, 0] },
}

const { data: banner } = await useCustomFetch<ISlideListResponse[]>('/api/page/get_banner')
// console.log(banner)
</script>

<style lang="scss" scoped>
.banner {
    --swiper-theme-color: var(--co-main-color);
    --swiper-pagination-bullet-size: 12px;
}

.banner-link {
    display: block;
    width: 100%;
    height: 600px;
    position: relative;
    top: 0;
    left: 0;
    // padding-bottom: 30%;

    >img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
