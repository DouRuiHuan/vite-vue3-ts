/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-01 19:15:01
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-15 15:47:04
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/vite-vue3-ts/src/router/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            isHide: false
        },
        component: () => import('@/views/login/index.vue')
    }
]
