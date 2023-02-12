/*
 * @Author: 大蒙
 * @Date: 2023-02-12 20:14:39
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-02-12 20:32:43
 * @FilePath: /vue3_vite_ts/src/router/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 启益医疗, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
