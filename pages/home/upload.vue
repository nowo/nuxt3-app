<template>
    <form class="p20px" @submit.prevent="handleImageUpload">
        <div class="mb10px">
            <input v-model="username" type="text" name="username">
        </div>
        <div class="mb10px">
            <input multiple type="file" @change="handleFile($event, item)">
        </div>
        <input type="submit">
    </form>
</template>

<script setup>
const files = ref()
const username = ref('')

async function handleImageUpload() {
    try {
        const fd = new FormData()
        console.log(files.value)
        if (files.value) {
            Array.from(files.value).forEach((file, index) => {
                fd.append(index, file)
            })
        }

        fd.append('username', username.value)
        // console.log(fd)
        const { data } = await $fetch('/api/login/sign_test', {
            // params: fd,
            method: 'POST',
            body: fd,
            // body: { username: username.value },
        })
        console.log('data from backend is ', data)
    } catch (error) {
        console.log(error)
    }
}

function handleFile(e, item) {
    files.value = e.target.files
}
</script>
