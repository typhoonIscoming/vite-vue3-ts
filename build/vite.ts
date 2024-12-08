import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import Legacy from '@vitejs/plugin-legacy';
import progress from 'vite-plugin-progress';
// 自定义插件
export default function createVitePlugins() {
    const root = process.cwd();
    // 路径查找
    const pathResolve = (dir: string) => resolve(root, '.', dir)
    return [
        Vue(),
        UnoCSS(),
        Legacy({
            targets: ['defaults', 'ie>=11',],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        progress(), // 打包进度插件
    ]
}
