import type { Plugin } from 'vite'

export const vitePlugin: () => Plugin = () => {
  return {
    name: 'vite-plugin',
    transform(code, id) {
      console.log('code:' + code, 'id:' + id)
      return ''
    },
  }
}