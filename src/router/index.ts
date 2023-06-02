import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './route.ts'

const router = createRouter({
    history: createWebHashHistory(), // history 模式则使用 createWebHistory()
    routes
})

export default router
