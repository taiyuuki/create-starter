import type { DependenceZip } from 'src/versions'

export const base: DependenceZip = {
    devList: [
        '@quasar/app-vite',
        '@taiyuuki/eslint-config',
        '@types/node',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'autoprefixer',
        'eslint',
        'eslint-plugin-import',
        'postcss',
        'stylelint',
        'stylelint-config-rational-order',
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue',
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-scss',
        'typescript',
        'vite',
    ],
    prodList: [
        '@quasar/extras',
        'pinia',
        'quasar',
        'vue',
        'vue-router',
    ],
}

export const pwa: DependenceZip = {
    devList: [
        'register-service-worker',
        'workbox-build',
        'workbox-cacheable-response',
        'workbox-core',
        'workbox-expiration',
        'workbox-precaching',
        'workbox-routing',
        'workbox-strategies',
    ],
    prodList: [],
}
