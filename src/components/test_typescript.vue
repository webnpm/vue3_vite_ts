<!--
 * @Author: 大蒙
 * @Date: 2023-02-13 19:36:28
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-02-13 19:53:23
 * @FilePath: \vue3_vite_ts\src\components\test_typescript.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 启益医疗, All Rights Reserved. 
-->
<template>
    <div>123</div>
</template>

<script setup lang="ts">
const s = '彼时彼刻，恰如此时此刻'
console.log(s)

enum Color {
    RED,
    GREEN,
    BLUE,
}
const red: Color = Color.RED
console.log(red)
</script>

<style scoped></style>
