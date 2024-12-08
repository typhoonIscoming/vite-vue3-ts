/** @format */

import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import type { ConfigEnv, UserConfig } from 'vite';
import createVitePlugins from './build/vite';


// https://vite.dev/config/
/**
 *  配置是使 UnoCSS 强大的要素。
	Rules - 定义原子 CSS 实用程序
	Shortcuts - 将多个规则组合成一个简写。
	Theme - 定义主题变量。
	Variants - 将自定义约定应用于规则。
	Extractors - 定义提取实用工具的位置和方式。
	Preflights - 定义全局原始 CSS。
	Layers - 定义每个实用工具层的顺序。
	Presets - 常见用例的预定义配置。
	Transformers - 代码转换器用于支持用户源代码以符合规范。
	Autocomplete - 定义个性化的自动完成建议。
	默认情况下，UnoCSS 会自动在项目的根目录中查找 uno.config.{js,ts,mjs,mts} 
	或unocss.config.{ js, ts, mjs, mts }。您也可以在 Vite 中手动指定配置文件
 */
// export default defineConfig({
// 	plugins: [
// 		vue(),
// 		UnoCSS(),
// 	],
// });
// 当前执行node命令时文件夹的地址(工作目录)
/* eslint-disable-line */
const root = process.cwd();

const pathResolve = (dir: string) => resolve(root, '.', dir);

export default ({ command, mode }: ConfigEnv): UserConfig => {
	let env = {} as any
    const isBuild = command === 'build'
    if (!isBuild) {
        env = loadEnv((process.argv[3] === '--mode' ? process.argv[4] : process.argv[3]), root)
    } else {
        env = loadEnv(mode, root)
	}
	console.log('command===', command, mode, process.argv[3])
	return {
		base: env.VITE_BASE_PATH,
		root: root,
		// 服务端渲染
        server: {
            port: env.VITE_PORT, // 端口号
            host: "0.0.0.0",
            open: env.VITE_OPEN === 'true',
            // 本地跨域代理. 目前注释的原因：暂时没有用途，server 端已经支持跨域
            // proxy: {
            //   ['/admin-api']: {
            //     target: env.VITE_BASE_URL,
            //     ws: false,
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(new RegExp(`^/admin-api`), ''),
            //   },
            // },
		},
		// 项目使用的vite插件。 单独提取到build/vite/plugin中管理
		plugins: createVitePlugins(),
	}
}
