import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
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
