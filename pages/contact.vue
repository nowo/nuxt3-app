<!-- 关于我们 -->
<template>
    <LayoutContent>
        <div>
            <!-- <img :src="about?.img" alt=""> -->
            <div class="py10px" v-html="$lang(about?.content, about?.content_en)" />
        </div>
    </LayoutContent>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp()
const { data: about } = await useCustomFetch<IAboutInfoResponse>('/api/page/about', {
    params: {
        type: 2,
    },
})

definePageMeta({
    layout: 'home',
})
</script>

<style lang="scss" scoped></style>
