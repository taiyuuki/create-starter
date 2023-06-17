export const versions = {
    '@quasar/extras': '^1.16.4',
    '@vueuse/core': '^10.2.0',
    '@vueuse/head': '^1.1.26',
    '@babel/core': '^7.22.5',
    'axios': '^1.4.0',
    'tsup': '^7.0.0',
    'unbuild': '^1.2.1',
    'pinia': '^2.1.4',
    'pinia-plugin-persistedstate': '^3.1.0',
    'quasar': '^2.12.0',
    'vue': '^3.3.4',
    'vue-i18n': '^8.28.2',
    'vue-router': '^4.2.2',
    '@intlify/vite-plugin-vue-i18n': '^7.0.0',
    '@quasar/app-vite': '^1.4.3',
    '@taiyuuki/eslint-config-vue-unimport': '^0.0.9',
    '@taiyuuki/eslint-config-ts': '^0.0.9',
    '@types/node': '^14.18.51',
    '@typescript-eslint/eslint-plugin': '^5.59.11',
    '@typescript-eslint/parser': '^5.59.11',
    '@unocss/preset-attributify': '^0.53.1',
    '@unocss/preset-icons': '^0.53.1',
    '@unocss/preset-uno': '^0.53.1',
    '@unocss/preset-mini': '^0.53.1',
    '@unocss/preset-wind': '^0.53.1',
    '@unocss/preset-web-fonts': '^0.53.1',
    '@unocss/preset-typography': '^0.53.1',
    '@unocss/preset-tagify': '^0.53.1',
    '@unocss/preset-rem-to-px': '^0.53.1',
    '@types/vscode': '^1.79.1',
    '@vscode/test-electron': '^2.3.3',
    'unocss': '^0.53.1',
    'eslint': '^8.43.0',
    'eslint-plugin-import': '^2.27.5',
    'markdown-it-link-attributes': '^4.0.1',
    'markdown-it-shiki': '^0.9.0',
    'postcss': '^8.4.24',
    '@rollup/plugin-babel': '^6.0.3',
    '@rollup/plugin-commonjs': '^25.0.1',
    '@rollup/plugin-node-resolve': '^15.1.0',
    '@rollup/plugin-terser': '^0.4.3',
    'register-service-worker': '^2.1.2',
    'rollup': '^3.25.1',
    'rollup-plugin-copy': '^3.4.0',
    'rollup-plugin-dts': '^5.3.0',
    'rollup-plugin-node-builtins': '^1.0.0',
    'rollup-plugin-node-globals': '^1.4.0',
    'rollup-plugin-typescript2': '^0.34.1',
    'stylelint': '^15.7.0',
    'stylelint-config-rational-order': '^0.0.1',
    'stylelint-config-recommended-scss': '^12.0.0',
    'stylelint-config-recommended-vue': '^1.4.0',
    'stylelint-config-standard': '^33.0.0',
    'stylelint-config-standard-scss': '^9.0.0',
    'stylelint-scss': '^5.0.1',
    'typescript': '^5.1.3',
    'unplugin-auto-import': '^0.16.4',
    'unplugin-vue-components': '^0.25.1',
    'unplugin-element-plus': '^0.7.1',
    'vite-plugin-dts': '^2.3.0',
    'vite-plugin-pages': '^0.31.0',
    'vite-plugin-vue-layouts': '^0.8.0',
    'vite-plugin-vue-markdown': '^0.23.5',
    'vitest': '^0.32.2',
    'workbox-build': '^7.0.0',
    'workbox-cacheable-response': '^7.0.0',
    'workbox-core': '^7.0.0',
    'workbox-expiration': '^7.0.0',
    'workbox-precaching': '^7.0.0',
    'workbox-routing': '^7.0.0',
    'workbox-strategies': '^7.0.0',
    'vite': '^3.2.7',
    '@element-plus/icons-vue': '^2.1.0',
    'element-plus': '^2.3.6',
    '@vitejs/plugin-vue': '^4.2.3',
    'autoprefixer': '^10.4.14',
    'postcss-html': '^1.5.0',
    'sass': '^1.63.4',
    'vite-plugin-pwa': '^0.16.4',
    'vite-plugin-inspect': '^0.7.28',
    'vue-tsc': '^1.8.0'
}

export type Dependence = keyof typeof versions
export type DependenceArr = Dependence[]
export interface DependenceZip { devList: DependenceArr; prodList: DependenceArr }
