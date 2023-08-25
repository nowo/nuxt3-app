<template>
    <template v-for="val in childList" :key="val.path">
        <el-sub-menu v-if="val.children && val.children.length > 0" :index="val.path">
            <template #title>
                <!-- <SvgIcon :name="val.meta.icon" /> -->
                <i :class="val.icon" />
                <span>{{ val.name }}</span>
            </template>
            <LayoutAsideMenu :child="val.children" />
        </el-sub-menu>

        <el-menu-item v-else :index="val.path">
            <!-- <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)"> -->
            <i :class="val.icon" />
            <span>{{ val.name }}</span>
            <!-- <span>{{ val.meta?.title }}
                        <el-tag v-if="setTipsTag(val)" type="danger" size="small" effect="dark" round>12</el-tag>
                    </span> -->
            <!-- </template>
                <template v-else>
                    <a :href="val.meta.isLink" target="_blank" rel="opener" class="w100">
                        <SvgIcon :name="val.meta.icon" />
                        {{ val.meta.title }}
                    </a>
                </template> -->
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
    child: LayoutMenuItem[]
}>()

// {
//     child: {
//         type: Array as PropType<any[]>,
//         default: () => [],
//     },
// }

// 获取父级菜单数据
const childList = computed(() => {
    return props.child
})
</script>
