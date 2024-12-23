import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Legacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import VueJsx from '@vitejs/plugin-vue-jsx'

import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 自定义插件
export default function createVitePlugins() {
	// 路径查找
	// const root = process.cwd();
	// const pathResolve = (dir: string) => resolve(root, '.', dir)
	return [
		Vue(),
		UnoCSS(),
		VueJsx(),
		Legacy({
			targets: ['defaults', 'ie>=11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		}),
		progress(), // 打包进度插件
		ElementPlus({}),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],
			imports: [
				'vue',
				'vue-router',
				// 可额外添加需要 autoImport 的组件
				{
					'@/hooks/web/useI18n': ['useI18n']
					// '@/hooks/web/useMessage': ['useMessage'],
					// '@/hooks/web/useTable': ['useTable'],
					// '@/hooks/web/useCrudSchemas': ['useCrudSchemas'],
					// '@/utils/formRules': ['required'],
					// '@/utils/dict': ['DICT_TYPE']
				}
			],
			dts: 'src/types/auto-imports.d.ts',
			resolvers: [ElementPlusResolver()],
			eslintrc: {
				enabled: false, // Default `false`
				filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			}
		}),
		Components({
			// 生成自定义 `auto-components.d.ts` 全局声明
			dts: 'src/types/auto-components.d.ts',
			// 自定义组件的解析器
			resolvers: [ElementPlusResolver()],
			globs: [
				'src/components/**/**.{vue, md}',
				'!src/components/DiyEditor/components/mobile/**'
			]
		})
	]
}
