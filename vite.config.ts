/*
 * @Author: 大蒙
 * @Date: 2023-02-12 04:39:01
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-02-12 05:33:54
 * @FilePath: \vue3_vite_ts\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 启益医疗, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
})
