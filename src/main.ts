/** @format */

import { createApp } from 'vue';

// 引入状态管理
import { setupStore } from '@/store';

import './plugins/unocss';
import './style.css';
import App from './App.vue';

// 创建实例
const setupAll = async () => {
    const app = createApp(App);
    setupStore(app);

    app.mount('#app')
}
setupAll()