/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-01 15:58:21
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-01 16:01:07
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/my-vue-app/src/vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/vite-env.d.ts

// vite2为src/env.d.ts，vite3已改为src/vite-env.d.ts

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_API_BASE_URL: string
    readonly VITE_BUILD_SOURCEMAP: string
    readonly VITE_BUILD_DROP_CONSOLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
