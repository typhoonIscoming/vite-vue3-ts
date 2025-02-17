import type { App } from 'vue'
// 需要全局引入一些组件，如ElScrollbar，不然一些下拉项样式有问题
import { ElLoading, ElScrollbar, ElButton } from 'element-plus'
import { Icon } from '@/components/Icon'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const plugins = [ElLoading]

const components = [ElScrollbar, ElButton]
type Component = {
	name: string
}
export const setupElementPlus = (app: App<Element>) => {
	plugins.forEach(plugin => {
		app.use(plugin)
	})

	components.forEach((component: Component) => {
		app.component(component.name, component)
	})

	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	}

	// icon
	app.component('Icon', Icon)
}
