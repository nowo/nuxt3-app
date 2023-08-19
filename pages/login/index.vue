<template>
    <!-- <LoginBaseMain /> -->
    <div class="h100vh flex items-center justify-center">
        <div class="fixed left-0 top-0">
            <div>
                <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
                <button class="btn" @click="testLogin">
                    JS Sign In
                </button>
                <button class="btn" @click="signOut()">
                    Sign Out
                </button>
            </div>
            <div>
                <h2>#status:</h2>#
                <pre>{{ status }}</pre>
                <h2>#session?.user</h2>#
                <pre>{{ data }}</pre>
                <h2>#cookies</h2>#
                <!-- <pre>{{ cookies }}</pre> -->
            </div>
        </div>

        <el-form ref="formRef" :model="ruleForm" :rules="rules" size="large" class="login-content-form"
            @submit.prevent="onLogin">
            <el-form-item prop="username">
                <el-input v-model.trim="ruleForm.username" type="text" maxlength="20" placeholder="请输入账号" autofocus
                    clearable tabindex="1" @keyup.enter="onLogin">
                    <template #prefix>
                        <i class="i-ep-user" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model.trim="ruleForm.password" type="password" maxlength="20" placeholder="请输入密码" show-password
                    tabindex="2" @keyup.enter="onLogin">
                    <template #prefix>
                        <i class="i-ep-unlock" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-col :span="15">
                    <el-input v-model.trim="ruleForm.code" type="text" maxlength="4" placeholder="请输入验证码" clearable
                        tabindex="3" @keyup.enter="onLogin">
                        <template #prefix>
                            <i class="i-ep-position" />
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="1" />
                <el-col :span="8">
                    <el-button class="login-content-code" @click="getCode">
                        {{ state.verify }}
                    </el-button>
                </el-col>
            </el-form-item>
            <el-form-item class="login-animation4">
                <el-button type="primary" class="login-content-submit" round :loading="state.loading.signIn" tabindex="4"
                    @click="onLogin">
                    登 录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'

definePageMeta({
    layout: false,
})

const route = useRoute()
const router = useRouter()
const formRef = ref<FormInstance>()
// const userRef = ref<InstanceType<typeof el-input>>()

const state = reactive({
    verify: '1234',
    session_id: '',
    loading: {
        signIn: false,
    },
})

const ruleForm = reactive({
    username: '1234',
    password: '1234',
    code: '',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '必填项不能为空', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '必填项不能为空', trigger: 'blur' },
    ],
    code: [
        { required: true, message: '必填项不能为空', trigger: 'blur' },
    ],
})

// 获取验证码
const getCode = async () => {

}
// 时间获取
const currentTime = computed(() => {
    // return formatAxis(new Date())
})

// 清空表单
const clearForm = () => {
    formRef.value?.resetFields()
}

// 登录成功后的跳转
const signInSuccess = () => {
    clearForm() // 清空表单

    // 初始化登录成功时间问候语
    const currentTimeInfo = currentTime.value
    // 登录成功，跳到转首页
    // 如果是复制粘贴的路径，非首页/登录页，那么登录成功后重定向到对应的路径中
    if (route.query?.redirect) {
        router.push({
            path: route.query?.redirect as string,
            query: Object.keys(route.query?.params as string).length > 0 ? JSON.parse(route.query?.params as string) : '',
        })
    } else {
        router.push('/')
    }

    // 登录成功提示
    // 关闭 loading
    state.loading.signIn = true
    const signInText = '欢迎回来！'
    ElMessage.success(`${currentTimeInfo}，${signInText}`)
    // NextLoading.start()
}

// const { signIn, signOut, session, status, cookies } = useAuth()
const { status, data, lastRefreshedAt, getCsrfToken, getProviders, getSession, signIn, signOut } = useAuth()
// 登录
const onLogin = async () => {
    if (state.loading.signIn) return
    const isRun = await formRef.value?.validate((valid, fields) => !!valid)
    if (!isRun) return

    // const { data, pending, error, refresh } = useFetch('/api/login/sign', {
    //     method: 'POST',
    //     body: {
    //         username: '管理员',
    //         account: 'admin',
    //         password: '123',
    //     },
    // })

    state.loading.signIn = true

    // Session.set('token', '1235463456646')
    // signInSuccess()
}

const testLogin = async () => {
    // console.log(session)
    try {
        const res = await signIn('credentials', {
            // callbackUrl: '/',
            redirect: false,
            account: ruleForm.username,
            password: ruleForm.password,
        })
        console.log(res)

        // location.reload()
    } catch (e) {
        console.log(e)
    }

    // console.log('error, url :>> ', error, url);
    // setTimeout(() => {
    //     console.log(session, cookies)
    // }, 1000)
    // await wait(5000)
}

onBeforeMount(() => {
    getCode()
})
// onMounted(() => {
//   userRef.value?.focus()
// })
</script>

<style scoped lang="scss">
.login-content-form {

    width: 400px;
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;

    // @for $i from 1 through 4 {
    //   .login-animation#{$i} {
    //     opacity: 0;
    //     animation-name: error-num;
    //     animation-duration: 0.5s;
    //     animation-fill-mode: forwards;
    //     animation-delay: calc($i/10) + s;
    //   }
    // }

    .login-content-password {
        display: inline-block;
        width: 20px;
        cursor: pointer;

        &:hover {
            color: #909399;
        }
    }

    .login-content-code {
        width: 100%;
        padding: 0;
        font-weight: bold;
        letter-spacing: 5px;
    }

    .login-content-submit {
        width: 100%;
        letter-spacing: 2px;
        font-weight: 300;
        margin-top: 15px;

        :deep(i.el-icon) {
            margin: 0;
        }
    }
}
</style>
