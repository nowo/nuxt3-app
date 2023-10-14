<template>
    <div class="content">
        <div class="login">
            <div class="title">
                登录
            </div>
            <el-form label-width="40px" :model="ruleForm" style="max-width: 330px" size="large">
                <el-form-item prop="phone" :rules="[{ required: true, message: '请输入您的手机号/邮箱/账号' }]">
                    <el-input v-model="ruleForm.phone" placeholder="请输入手机号/邮箱/账号" />
                </el-form-item>
                <el-form-item prop="password" :rules="[{ required: true, message: '请输入您的密码' }]">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button class="w300px">
                        <i class="i-ep-plus" />
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
            <!-- <div style="margin:0 40px;">
                          <NuxtLink to="/Fpassword" style="float: left;">
                            忘记密码?
                          </NuxtLink>
                          <NuxtLink to="/register" style="float: right;">
                            立即注册>
                          </NuxtLink>
                        </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const ruleForm = reactive({
    phone: '',
    password: '',
})

if (ruleForm.phone) {
    ruleForm.password = '123.43'
} else {
    ruleForm.password = '11'
}
</script>

<style scoped>
body {
    margin: 0;
}

.content {
    margin-top: 100px;
    height: 700px;
    border: 1px solid #50585e;
}

.login {
    width: 390px;
    height: 400px;
    border: 1px solid #50585e;
    position: absolute;
    top: 220px;
    right: 400px;
    color: #ffffff;
}

.title {
    font-size: x-large;
    text-align: center;
    height: 70px;
    padding-top: 20px;
    color: #000;
}
</style>
