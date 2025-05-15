import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import compressPlugin from 'vite-plugin-compression2'

// 加载本地私有配置
let privateConfig: { [key: string]: any } = {}
try {
  const data = await import('./_config')
  privateConfig = data.default || {}
} catch {}

const resolve = (dir: string) => path.resolve(__dirname, dir)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_PATH,
    server: {
      open: false,
      host: '0.0.0.0',
      port: 9001,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/api': {
          target: privateConfig?.apiProxy,
          changeOrigin: true,
          rewrite: path => path.replace('/api/', '/')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n'],
        resolvers: []
      }),
      compressPlugin({
        algorithm: 'gzip'
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    css: {
      // preprocessorOptions: {
      //   scss: {
      //     // api: 'modern-compiler',
      //     silenceDeprecations: ['legacy-js-api'],
      //     // scss全局预定义变量，引入多个文件以（分号分割）
      //     additionalData: `@use "./src/styles/theme/index.scss" as *;`
      //   }
      // }
    }
  }
})
