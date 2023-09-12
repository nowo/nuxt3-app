<template>
    <div>
        <ClientOnly>
            <ul class="new-ul min-h250px">
                <li v-for="item in defData.listData" :key="item.id" class="flex">
                    <NuxtLinkLocale :to="setLinkPath(item)" class="link">
                        <co-image :src="item.img" class="h100% w140px block!" />
                    </NuxtLinkLocale>
                    <div class="flex-1 pl20px">
                        <h3 class="text-truncate pb5px font-bold">
                            <NuxtLinkLocale :to="setLinkPath(item)" class="link">
                                {{ $lang(item.title, item.title_en) }}
                            </NuxtLinkLocale>
                        </h3>
                        <div class="intro text-14px">
                            {{ $lang(item.describe, item.describe_en) }}
                        </div>
                    </div>
                </li>
            </ul>
            <el-pagination v-if="defData.pagination.total" v-model:current-page="defData.pagination.page"
                v-model:page-size="defData.pagination.page_size" small :page-sizes="defData.pagination.page_sizes"
                :total="defData.pagination.total" :pager-count="5" background layout="total, prev, pager, next, jumper"
                class="mt15px justify-center" @size-change="onHandleSizeChange" @current-change="onHandleCurrentChange" />
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    type: 1 | 2 | 3 | 4 // 类型 1:普通新闻 2:客户案例 3:公司动态 4:公司公告
}>()

const route = useRoute()
const { $lang } = useNuxtApp()

const defData = reactive({

    pagination: {
        total: 0,
        page: 1,
        page_size: 2,
        page_sizes: [10],
    },
    listData: [] as INewsResponse[],
})

// 初始化数据
const initTableData = async () => {
    const { data, error } = await useCustomFetch<{ code: number; data: INewsResponseList; msg: string }>('/api/page/news', {
        method: 'post',
        body: {
            type: props.type,
            isPage: 1,
            page: defData.pagination.page,
            pageSize: defData.pagination.page_size,
        },
    })

    if (error.value) return ElMessage.error('网络错误')

    defData.listData = data.value?.data.list || []
    defData.pagination.total = data.value?.data.total || 0
    // await wait(500)
    if (data.value?.code === 200) {
        defData.listData = data.value.data.list
        defData.pagination.total = data.value.data.total
    } else {
        ElMessage.error(data.value?.msg)
    }
}

// 设置详情页链接地址
const setLinkPath = (row: INewsResponse) => {
    return `${route.path}/${row.id}`
}

// 分页点击
const onHandleCurrentChange = (val: number) => {
    initTableData()
}
// 分页数量点击
const onHandleSizeChange = async (val: number) => {
    initTableData()
}

// onBeforeMount(() => {
//     initTableData()
// })

initTableData()
</script>

<style lang="scss" scoped>
.new-ul {
    li {
        padding: 12px 5px;

        +li {
            border-top: 1px dotted #eee;
        }
    }

    .link {
        &:hover {
            color: var(--co-main-color);
        }
    }

    .intro {
        line-height: 24px;
        color: var(--el-text-color-secondary);
        height: 72px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
}
</style>
