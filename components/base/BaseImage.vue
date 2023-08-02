<template>
    <el-image v-bind="$attrs">
        <template #error>
            <div class="image-slot">
                <i class="i-ep-picture" />
            </div>
        </template>
    </el-image>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.image-slot {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 36px;
  }
}
</style>
