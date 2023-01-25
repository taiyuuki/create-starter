import type { Dependence, DependenceZip } from 'src/versions'

export const axios: DependenceZip = {
  devList: [],
  prodList: ['axios'],
}

export const i18n: DependenceZip = {
  devList: ['@intlify/vite-plugin-vue-i18n'],
  prodList: ['vue-i18n'],
}

export const vueuse: DependenceZip = {
  devList: [],
  prodList: ['@vueuse/core'],
}

export const markdown: DependenceZip = {
  devList: ['markdown-it-link-attributes', 'markdown-it-shiki', 'vite-plugin-vue-markdown'],
  prodList: ['@vueuse/head'],
}

export const persist: DependenceZip = {
  devList: [],
  prodList: ['pinia-plugin-persistedstate'],
}

export const unocss: DependenceZip = {
  devList: ['unocss'],
  prodList: [],
}

export const unoPreset: Record<keyof VueScope['unoPreset'], Dependence> = {
  'attributify': '@unocss/preset-attributify',
  'icons': '@unocss/preset-icons',
  'uno': '@unocss/preset-uno',
  'mini': '@unocss/preset-mini',
  'wind': '@unocss/preset-wind',
  'webFont': '@unocss/preset-web-fonts',
  'typography': '@unocss/preset-typography',
  'tagify': '@unocss/preset-tagify',
  'remToPx': '@unocss/preset-rem-to-px',
}

export const layouts: DependenceZip = {
  devList: ['vite-plugin-pages', 'vite-plugin-vue-layouts'],
  prodList: [],
}

export const vitest: DependenceZip = {
  devList: ['vitest'],
  prodList: [],
}

export const autoAPIs: DependenceZip = {
  devList: ['unplugin-auto-import'],
  prodList: [],
}

export const autoComponents: DependenceZip = {
  devList: ['unplugin-vue-components'],
  prodList: [],
}