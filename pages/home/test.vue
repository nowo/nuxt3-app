<template>
    <div>
        <el-button @click="testFn">
            import导入测试
        </el-button>

        <BaseFooter />
        <BaseHeader />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { useCloned } from '@vueuse/core'
import BaseFooter from '~/layouts/components/BaseFooter.vue'
import BaseHeader from '~/layouts/components/BaseHeader.vue'

import { useMouse } from '#imports'

const formRef = ref()

const mouse = useMouse()

const testFn = () => {
    const a: LocaleObject | undefined = undefined
    console.log(a)
    console.log(mouse)

    const str = useCloned('123')
    console.log(str)
}
</script>
