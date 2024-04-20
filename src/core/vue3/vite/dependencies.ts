import type { DependenceZip } from 'src/versions'

export const base: DependenceZip = {
    prodList: ['vue', 'pinia', 'vue-router'],
    devList: [
        '@taiyuuki/eslint-config',
        '@types/node',
        '@vitejs/plugin-vue',
        'autoprefixer',
        'eslint',
        'eslint-plugin-import',
        'postcss',
        'postcss-html',
        'sass',
        'stylelint',
        'stylelint-config-rational-order',
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue',
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-scss',
        'typescript',
        'vite',
        'vue-tsc',
    ],
}

export const pwa: DependenceZip = {
    devList: ['vite-plugin-pwa'],
    prodList: [],
}

export const autoComponentsEl: DependenceZip = {
    devList: ['unplugin-element-plus'],
    prodList: [],
}

export const element: DependenceZip = {
    devList: [],
    prodList: ['@element-plus/icons-vue', 'element-plus'],
}
