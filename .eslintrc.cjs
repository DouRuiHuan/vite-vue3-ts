/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-01 15:36:55
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-16 11:31:15
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/my-vue-app/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': ['off']
    }
}
