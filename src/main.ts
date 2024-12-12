/** @format */

import { createApp } from 'vue';

// 引入状态管理
import { setupStore } from '@/store';

// 路由
import router, { setupRouter } from '@/router'

import './plugins/unocss';
import './style.css';
import App from './App.vue';

// 创建实例
const setupAll = async () => {
    const app = createApp(App);
    setupStore(app);

    // 挂载路由
    setupRouter(app);

    await router.isReady()

    app.mount('#app')
}
setupAll()