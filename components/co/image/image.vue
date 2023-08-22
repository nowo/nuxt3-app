<template>
    <el-image class="co-image" v-bind="$attrs">
        <template #error>
            <div class="co-image-error">
                <i class="i-ep-picture" />
                <!-- <i class="i-ep-picture-filled" /> -->
            </div>
        </template>
    </el-image>
</template>

<script lang="ts" setup>
const props = defineProps({
    iconSize: {
        type: Number,
    },
})
// 设置图标大小
const iconWid = computed(() => {
    return props.iconSize ? `${props.iconSize}px` : '36px'
})
</script>

<style lang="scss">
.co-image {

    &-error {
        i {
            // font-size: 36px;
            // font-size: var(--co-image-error-size, 36px);
            // font-size: var( --co-image-error-size,v-bind(iconWid));
            font-size: v-bind(iconWid);
        }
    }
}
</style>
