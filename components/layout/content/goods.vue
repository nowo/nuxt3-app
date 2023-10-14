<template>
    <div>
        <ClientOnly>
            <ul class="news-grid">
                <li v-for="item in defData.listData" :key="item.id" :span="8">
                    <NuxtLinkLocale :to="setLinkPath(item)" class="link">
                        <co-image :src="item.img" class="w100% b-1px b-#eee b-solid pb75% block!" />
                    </NuxtLinkLocale>
                    <h3 class="mt5px text-truncate text-center font-bold">
                        <NuxtLinkLocale :to="setLinkPath(item)" class="link-a">
                            {{ $lang(item.title, item.title_en) }}
                        </NuxtLinkLocale>
                    </h3>
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
const route = useRoute()

const { $lang } = useNuxtApp()

const id = useRouteQuery('id')

const defData = reactive({
    pagination: {
        total: 0,
        page: 1,
        page_size: 12,
        page_sizes: [12],
    },
    listData: [] as INewsResponse[],
})

// 初始化数据
const initTableData = async () => {
    const param: { type?: number } & ListPage = {
        isPage: 1,
        page: defData.pagination.page,
        pageSize: defData.pagination.page_size,
    }

    if (id.value) param.type = Number(id.value)

    const { data, error } = await useCustomFetch<{ code: number; data: INewsResponseList; msg: string }>('/api/page/product', {
        method: 'post',
        body: param,
    })

    if (error.value) return ElMessage.error('网络错误')

    defData.listData = data.value?.data.list || []
    console.log(defData.listData)
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

watch(id, () => {
    initTableData()
})

initTableData()
</script>

<style lang="scss" scoped>
.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 5px;
}

.link {
    :deep(img) {
        transition: all 0.3s;

        &:hover {
            transform: scale(1.08);
        }
    }
}

.link-a {
    &:hover {
        color: var(--co-main-color);
    }
}
</style>
