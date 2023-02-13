<!--
 * @Author: 大蒙
 * @Date: 2023-02-12 18:57:26
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-02-13 14:11:47
 * @FilePath: /vue3_vite_ts/src/components/HelloWorld.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 启益医疗, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()

//写一个节流
const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p class="test">
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss"></style>
