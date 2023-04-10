<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})

function generateAlphabets(n: number) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  const combinations: string[] = []

  if (n <= 0) {
    return combinations
  }

  for (let i = 0; i < alphabets.length; i++) {
    const letter = alphabets[i]

    if (n === 1) {
      combinations.push(letter)
    } else {
      const suffixes = generateAlphabets(n - 1)

      for (let j = 0; j < suffixes.length; j++) {
        combinations.push(letter + suffixes[j])
      }
    }
  }

  return combinations
}

// 示例：
const n = 2
const combinations = generateAlphabets(n)

console.log(`共有 ${combinations.length} 种组合：`)
// console.log(combinations)
onMounted(async () => {
  const { data } = await useFetch('/api/test')
  console.log('data :>> ', data)
})
</script>

<template>
  商品详情页
  <div>
    <span v-for="item in combinations" :key="item" class="mx5px">{{ item }}</span>
  </div>
  <!-- {{ data }} -->
  <!-- <iframe src="https://github.com/posa" /> -->
</template>

<style lang="scss" scoped></style>
