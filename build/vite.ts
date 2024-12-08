import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

// 自定义插件
export default function createVitePlugins() {
    const root = process.cwd();
    // 路径查找
    const pathResolve = (dir: string) => resolve(root, '.', dir)
    return [
        Vue(),
        UnoCSS(),
    ]
}
