/*
 * @Author: 大蒙
 * @Date: 2023-02-12 18:57:26
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-02-13 19:37:52
 * @FilePath: \vue3_vite_ts\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 启益医疗, All Rights Reserved.
 */
import { createApp } from 'vue'
import '@/style/main.scss'
import router from '@/router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')
