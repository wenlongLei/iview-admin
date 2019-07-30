module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "plugins": [
    "cypress",
    "html",
    "vue"
  ],
  "env": {
    "mocha": true,
    "cypress/globals": true,
    "amd": true,
    "es6": true,
    "browser": true,
    "node": false
  },
  "globals": {

  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  "settings": {
  },
  // add your custom rules here
  rules: {
    'no-compare-neg-zero': 'error',/*禁止与 -0 进行比较*/
    'no-cond-assign': 'warn',/*禁止条件表达式中出现赋值操作符*/
    'no-constant-condition': 'warn',/*禁止在条件中使用常量表达式*/
    'no-control-regex': 'error',/*禁止在正则表达式中使用控制字符*/
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-dupe-args': 'error',/*禁止 function 定义中出现重名参数*/
    'no-dupe-keys': 'error',/*禁止对象字面量中出现重复的 key*/
    'no-duplicate-case': 'error',/*禁止出现重复的 case 标签*/
    'no-empty': 'warn',/*禁止出现空语句块*/
    'no-empty-character-class': 'error',/*禁止在正则表达式中使用空字符集*/
    'no-ex-assign': 'error',/*禁止对 catch 子句的参数重新赋值*/
    'no-extra-boolean-cast': 'warn',/*禁止不必要的布尔转换*/
    'no-extra-semi': 'warn',/*禁止不必要的分号*/
    'no-func-assign': 'error',/*禁止对 function 声明重新赋值*/
    'no-invalid-regexp': 'error',/*禁止 RegExp 构造函数中存在无效的正则表达式字符串*/
    'no-irregular-whitespace': 'warn',/*禁止在字符串和注释之外不规则的空白*/
    'no-regex-spaces': 'warn',/*禁止正则表达式字面量中出现多个空格*/
    'no-sparse-arrays': 'warn',/*禁用稀疏数组*/
    'no-unexpected-multiline': 'warn',/*禁止出现令人困惑的多行表达式*/
    'no-unreachable': 'error',/*禁止在return、throw、continue 和 break 语句之后出现不可达代码*/
    'no-unsafe-finally': 'error',/*禁止在 finally 语句块中出现控制流语句*/
    'no-unsafe-negation': 'error',/*禁止对关系运算符的左操作数使用否定操作符*/
    'use-isnan': 'error',/*要求使用 isNaN() 检查 NaN*/
    'valid-typeof': 'error',/*强制 typeof 表达式与有效的字符串进行比较*/
    'no-case-declarations': 'warn',/*不允许在 case 子句中使用词法声明*/
    'no-empty-pattern': 'error',/*禁止使用空解构模式*/
    'no-fallthrough': 'warn',/*禁止 case 语句落空*/
    'no-global-assign': 'warn',/*禁止对原生对象或只读的全局对象进行赋值*/
    'no-octal': 'warn',/*禁用八进制字面量*/
    'no-redeclare': 'error',/*禁止多次声明同一变量*/
    'no-self-assign': 'warn',/*禁止自我赋值*/
    'no-unused-labels': 'error',/*禁用出现未使用过的标*/
    'no-useless-escape': 'warn',/*禁用不必要的转义字符*/
    'no-delete-var': 'warn',/*禁止删除变量*/
    'no-undef': 'error',/*禁用未声明的变量，除非它们在 global 注释中被提到*/
    'no-unused-vars': 'error',/*禁止出现未使用过的变量*/
    'no-mixed-spaces-and-tabs': 'warn',/*禁止空格和 tab 的混合缩进*/
    'no-this-before-super': 'warn',/*禁止在构造函数中，在调用 super() 之前使用 this 或 super*/
    'require-yield': 'error',/*要求 generator 函数内有 yield*/
    'no-extra-parens': 'warn',/*禁止不必要的括号*/
    'no-alert': 'warn',/*禁用 alert、confirm 和 prompt*/
    'no-else-return': 'error',/*禁止 if 语句中 return 语句之后有 else 块*/
    'no-labels': 'error',/*禁用标签语句*/
    'no-loop-func': 'error',/*禁止在循环中出现 function 声明和表达式*/
    'no-script-url': 'warn',/*禁止使用 javascript: url*/
    'no-unmodified-loop-condition': 'error',/*禁用一成不变的循环条件*/
    'init-declarations': ["error", "always"],/*要求或禁止 var 声明中的初始化*/
    'no-shadow': 'error',/*禁止变量声明与外层作用域的变量同名*/
    'no-use-before-define': 'error',/*禁止在变量定义之前使用它们*/
    'camelcase': 'error',/*强制使用骆驼拼写法命名约定*/
    'indent': ["error", 2],/*强制使用一致的缩进*/
    'line-comment-position': ["error", { "position": "above" }],/*强制行注释的位置*/
    'linebreak-style': ['warn','unix'],/*强制使用一致的换行风格*/
    'max-depth': ['warn',4],/*强制可嵌套的块的最大深度*/
    'max-len': ['warn',{'code':120, 'tabWidth':2, "ignoreComments": true, "ignoreUrls": true,
      "ignoreStrings": true, "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true}
    ],/*强制一行的最大长度*/
    'max-nested-callbacks': 'warn',/*强制回调函数最大嵌套深度*/
    'multiline-comment-style': ["warn", "starred-block"],/*强制对多行注释使用特定风格*/
    'new-cap': 'error',/*要求构造函数首字母大写*/
    'no-multiple-empty-lines': 'warn',/*禁止出现多行空行*/
    'prefer-arrow-callback': 'warn',/*要求回调函数使用箭头函数*/
    'prefer-const': ["error", {"destructuring": "any", "ignoreReadBeforeAssign": true}],/*要求使用 const 声明那些声明后不再被修改的变量*/
    'no-var': 'error',/*要求使用 let 或 const 而不是 var*/
    'no-useless-rename': 'error',/*禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字*/
    'no-duplicate-imports': 'error',/*禁止重复模块导入*/
    'default-case': 'warn',/*要求 switch 语句中有 default 分支*/
    'no-return-assign': 'warn',/*禁止在 return 语句中使用赋值语句*/
    'no-return-await': 'error',/*禁用不必要的 return await*/
    'no-void': 'error',/*禁用 void 操作符*/
    'require-await': 'error',/*禁止使用不带 await 表达式的 async 函数*/
    'array-bracket-spacing': ['warn','never'],/*强制数组方括号中使用一致的空格*/
    'comma-dangle': ["warn", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "ignore"
    }],/*要求或禁止末尾逗号*/
    'no-dupe-class-members': 'error',/*禁止类成员中出现重复的名称*/
    'no-new-symbol': 'error',/*禁止 Symbolnew 操作符和 new 一起使用*/
    'array-bracket-newline': ['warn','consistent'],/*在数组开括号后和闭括号前强制换行*/
    'no-eval': ["warn", {"allowIndirect": true}],
    'curly': ['error','all'],
    'comma-spacing': ["warn", { "before": false, "after": true }],/*逗号后面加空格*/
    'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}] /*允许无效终端标签，以支持weex、小程序等特定语法*/
  }
}
