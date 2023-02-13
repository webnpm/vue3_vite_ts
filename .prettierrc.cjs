/*
* @Author: 大蒙
* @Date: 2023-02-12 06:43:38
* @LastEditors: 大蒙
* @LastEditTime: 2023-02-12 07:36:36
* @FilePath: \vue3_vite_ts\.prettierrc.cjs
* @Description:
*
* Copyright (c) 2023 by 启益医疗, All Rights Reserved.
*/
module.exports = {
tabWidth: 4,
jsxSingleQuote: true,
jsxBracketSameLine: true,
printWidth: 200,
singleQuote: true,
semi: false,
overrides: [
{
files: '*.json',
options: {
printWidth: 200,
},
},
],
arrowParens: 'always',
}

// .prettierrc.cjs

// module.exports = {
//     // 一行最多100个字符
//     printWidth:80,
//     // 使用2个空格缩进
//     tabWidth:2,
//     // 不使用缩进,而使用空格
//     useTabs:false,
//     // 行尾需要有分号
//     semi:true,
//     // 使用单引号
//     singleQuote:true,
//     // 对象的key仅在必要时用引号
//     quoteProps: 'as-needed',
//     // jsx 不使用单引号,而使用双引号
//     jsxSingleQuote:false,
//     // 尾随逗号
//     trailingComma:'es5',
//     // 大括号内的首尾需要空格
//     bracketSpacing:true,
//     // 箭头函数,只有一个参数的时候,也需要括号
//     arrowParens:'always',
//     // 每个文件格式化的范围是文件的全部内容
//     rangeStart:0,
//     rangeEnd:Infinity,
//     // 不需要写文件开头的 @prettier
//     insertPragma:false,
//     // 不需要自动在文件开头插入 @prettier
//     insertPragma:false,
//     // 使用默认的折行标准
//     proseWrap: 'always',
//     // 根据显示样式决定html要不要折行
//     htmlWhitespaceSensitivity:'css',
//     // 换行符使用lf
//     endOfline: 'lf'
// }
