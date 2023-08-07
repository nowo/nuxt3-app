<template>
    <section class="sec-banner">
        <div class="flex container">
            <div class="left-box w25%">
                <HomeClassify />
            </div>
            <div class="cen-box w50%">
                <swiper-container class="swp-banner" :slides-per-view="1" :centered-slides="true"
                    :pagination="{ hideOnClick: false }">
                    <swiper-slide>
                        <img src="pwa-512x512.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="pwa-192x192.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="pwa-512x512.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="pwa-192x192.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="pwa-512x512.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="pwa-192x192.png" alt="">
                    </swiper-slide>
                </swiper-container>
            </div>
            <div class="right-box w25%">
                用户信息
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'

// register Swiper custom elements
register()

// const initSwiper = () => {
//   const swiperEl: any = document.querySelector('swiper-container');

//   // swiper parameters
//   const swiperParams = {
//     slidesPerView: 1,
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//     on: {
//       init() {
//         // ...
//       },
//     },
//   };

//   // // now we need to assign all parameters to Swiper element
//   Object.assign(swiperEl, swiperParams);

//   // and now initialize it
//   swiperEl.initialize();
// }

// onMounted(() => {
//   initSwiper()
// })
</script>

<style lang="scss" scoped>
.cen-box {
  padding: 0 12px;

  .swp-banner {
    background-color: #fff;
  }
}
</style>
