<script setup lang="ts">
import { CommonApi } from '~~/api/common'

const { data } = await useFetch('/api/pageview')

const { data: a } = await useFetch('http://127.0.0.1:7001/api/v1/news/list', {
  method: 'post',
//   baseURL: 'http://127.0.0.1:7001',
})
// console.log('a :>> ', a)

const defData = reactive({
  page: 1,
})

const { data: b } = useHttp('/api/v1/news/list', () => {
  return 1
}, {
  method: 'post',
  baseURL: 'http://127.0.0.1:7001',
})

// console.log('b :>> ', b)
const { data: s } = CommonApi.getList({ page: defData.page })
// console.log('s :>> ', s.value?.data.total)

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-gray:80>
    <h3>1111----    {{ s?.data.total }}</h3>
    <span font-500 text-gray>{{ data?.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
