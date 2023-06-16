<!--
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-01 19:21:08
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-16 11:32:21
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/vite-vue3-ts/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login">
        <img src="@/assets/login.jpeg" class="bg" alt="" />
        <div class="login-modal">
            <h3>登录</h3>
            <a-form ref="formRef" :model="formState">
                <a-form-item>
                    <a-input v-model:value="formState.phone" />
                </a-form-item>
                <a-form-item>
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
                <a-form-item>
                    <a-input v-model:value="formState.password" />
                </a-form-item>
                <a-form-item>
                    <a-button class="submit" type="primary" @click="handleClickLogin">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const formRef = ref()
const formState = reactive({
    phone: '15175331451',
    password: 'Drh12345678'
})
const handleClickLogin = () => {}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    position: relative;
    .bg {
        width: 100%;
        height: 100%;
        opacity: 0.3;
    }
    .login-modal {
        width: 500px;
        height: 400px;
        background: #fff9;
        border-radius: 4px;
        box-shadow: 0px 0px 8px #0003;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        padding: 40px;
        > h3 {
            text-align: center;
            margin-bottom: 30px;
        }
        :deep .ant-form-item-control-input-content {
            margin-top: 10px;
            > span,
            > input {
                padding: 11px;
            }
        }
        .submit {
            height: 45px;
            width: 100%;
            margin-top: 30px;
        }
    }
}
</style>
