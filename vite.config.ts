/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-06-01 14:55:22
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-06-01 18:23:42
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/my-vue-app/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
export default ({ mode }) => {
    const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd())
    return defineConfig({
        plugins: [
            vue(),
            createHtmlPlugin(),
            Components({
                resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
            }),
            AutoImport({
                imports: ['vue', 'vue-router'],
                resolvers: [AntDesignVueResolver()],
                dts: 'src/auto-import.d.ts',
                eslintrc: {
                    enabled: true
                }
            })
        ],
        define: {
            'process.env': env
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '~@': resolve(__dirname, './src')
            }
        },
        css: {
            loaderOptions: {
                less: {
                    lessOptions: {
                        javascriptEnabled: true,
                        modifyVars: {
                            hack: 'true;@import "~@/style/_variables.less"'
                        }
                    }
                }
            }
        },
        server: {
            port: 3000,
            open: true,
            proxy: {
                '^/se/api': {
                    target: 'http://172.20.53.122',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/se\/api/, '')
                }
            }
        },
        build: {
            outDir: 'dist',
            sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
            minify: 'terser',
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true',
                    drop_debugger: true
                }
            },
            chunkSizeWarningLimit: 1500
        }
    })
}
