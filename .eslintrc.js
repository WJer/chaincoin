// https://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    CC: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off', // Expected the Promise rejection reason to be an Error
    'no-new': 'off', // Do not use 'new' for side effects
    'keyword-spacing': 'off', //Expected space(s) after "if"
    'no-useless-escape': 'off', // Unnecessary escape character
    'comma-spacing': 'off', // A space is required after ','
    'no-tabs': 'off',
    'key-spacing': 'off', // Missing space before value for key
    'one-var': 'off', // Split initialized 'var' declarations into multiple statements
    'generator-star-spacing': 'off', // allow async-await
    'no-unneeded-ternary': 'off', // Unnecessary use of boolean literals in conditional expression 2>1?true:false
    'yoda': 'off', // Expected literal to be on the right side of !=   if (null != result && undefined != result)
    'no-extra-parens': 'off', // 禁止不必要的括号
    'no-extra-semi': 'off', // 禁止不必要的分号
    'semi': 'off', // 语句强制分号结尾
    'eqeqeq': 'off', //不必须===  !==
    'no-ternary': 'off', // 不允许使用三元操作符
    'no-multiple-empty-lines': 'off', // 禁止多个空行
    'no-trailing-spaces': 'off', // 禁用行尾空格
    'space-before-blocks': 'off', // 强制在块之前使用一致的空格
    'space-before-function-paren': 'off', // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 'off', // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'off', // 要求操作符周围有空格
    'space-unary-ops': 'off', // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 'off', // 强制在注释中 // 或 /* 使用一致的空格
    'quotes': 'off', // 强制使用一致的反勾号、双引号或单引号
    'indent': 'off', //缩进
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-mixed-operators': 'off',
    'comma-dangle': 'off',
    'block-spacing': 'off',
    'no-irregular-whitespace': 'off',
    'camelcase': 'off',
    'keyword-spacing': 'off',
    'curly': 'off',
    'eol-last': 'off', // 文件末尾强制换行
    'vue/require-v-for-key': 'off', // Elements in iteration expect to have 'v-bind:key' directives
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' // allow debugger during development
  }
}
