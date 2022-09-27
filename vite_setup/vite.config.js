import { defineConfig } from 'vite'

import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite' 
import { ElementPlusResolver, AntDesignVueResolver,VantResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport ({
      imports: ["vue", "vue-router","pinia"], // 自动导入vue和vue-router相关api(需要pinia的话这里需要引入pinia)
      dts:"src/auto-import.d.js"
    }),
    Components({
      dts: true,
      dirs: ['src/components'], // 按需加载的文件夹
      resolvers: [
          ElementPlusResolver(),  // ElementPlus按需加载
          AntDesignVueResolver(), // Antd   按需加载
          VantResolver() //vant  按需加载
     ] 
    }),

    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/imgs')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'lpr',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  // 反向代理
  server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'https://zhfwq.jchc.cn/isa_server/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'lqh',//设置打包文件夹
    brotliSize: false,
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** vite 2.6.x 以上需要配置 minify: terser，terserOptions 才能生效 */
    minify: "terser",
    /** 在 build 代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      output: {
        /** 删除注释 */
        comments: false,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
   
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: "static"
  },
  
  
})


// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
