/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-02 14:00:11
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-02 14:14:53
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/vite-vue3-ts/src/store/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

const useStore = defineStore('user', {
    state: () => ({
        counter: 0,
        name: 'Eduardo',
        isAdmin: true
    }),

    getters: {
        counter: state => state.counter
    }
})
export default useStore
