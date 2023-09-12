<template>
    <main p="x4 y10" text="center teal-700 dark:gray-200">
        <div text-4xl>
            <div i-carbon-warning inline-block />
        </div>
        <div>Not found</div>
        <!-- <div>
            <button btn text-sm m="3 t8" @click="router.back()">
                Back
            </button>
        </div> -->
    </main>

    <!-- <NuxtErrorBoundary @error="someErrorLogger">
        <template #error="{ error, clearError }">
            You can display the error locally here: {{ error }}
            <button @click="clearError">
                This will clear the error.
            </button>
        </template>
    </NuxtErrorBoundary> -->
</template>

<script setup lang="ts">
showErrorPage()
</script>
