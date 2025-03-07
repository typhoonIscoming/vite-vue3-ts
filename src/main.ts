/** @format */

import { createApp } from 'vue'

// 引入状态管理
import { setupStore } from '@/store'

// 路由
import router, { setupRouter } from '@/router'
import Logger from '@/utils/Logger'

// 引入 element-plus
import { setupElementPlus } from '@/elementPlus'


import './plugins/unocss'
import './style.css'
import App from './App.vue'

// 创建实例
const setupAll = async () => {
	const app = createApp(App)

	// 屏蔽错误信息
	// app.config.errorHandler = () => null
	// 屏蔽警告信息
	app.config.warnHandler = () => null
	setupStore(app)

	setupElementPlus(app)

	// 挂载路由
	setupRouter(app)

	await router.isReady()

	app.mount('#app')
}
setupAll()
Logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE)
