<h1 align="center">Quasar Start</h1>

<p align="center">Opiniated Quasar + Vite starter template.</p>

### Features

- 💳[Quasar CLI](https://quasar.dev)   
- ⚡️[Quasar](https://quasar.dev), [Vue 3](https://vuejs.org), [Vite 3](https://github.com/vitejs/vite) 
  
  - 🍭 [\<script setup\>](https://vuejs.org/api/sfc-script-setup.html) 
  
  - 🎲[Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) 
  
  - 🔧[TypeScript](https://www.typescriptlang.org) 
  
  - 💻[SSR](https://quasar.dev/quasar-cli-vite/developing-ssr/introduction) 
  
  - 📱 [PWA](https://quasar.dev/quasar-cli-vite/developing-pwa/introduction#what-is-required)


- 📂File based routing via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages#vite-plugin-pages)

- 📁Layout system via [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts#vite-plugin-vue-layouts)

- 📝Importing marikdown  via  [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)

- 🔨Components auto importing via [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#unplugin-vue-components)

- 🪓APIs auto importing via [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#unplugin-auto-import)

- 🌍 [I18n](https://github.com/suplere/vitesse-quasar-nhost-template/blob/main/frontend/locales) \- Internationalization

- 🍍State Management via [Pinia](https://pinia.esm.dev/)

	- 💾Using the [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/) for persistence with full SSR support.

- 🎨[UnoCSS](https://github.com/antfu/unocss) - The on-demand Atomic CSS engine

- 🧰[VueUse](https://github.com/antfu/vueuse) - Vue Composition Utilities

- 🧲[Vitest](https://github.com/vitest-dev/vitest) - Unit Testing

## Getting started

### Clone to local

Use [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit taiyuuki/quasar-start my-quasar-app
```

## Scripts

- `pnpm dev` - Start in PWA mode
- `pnpm build` - Build  in PWA mode
- `pnpm dev:srr` - Start in SSR mode
- `pnpm build:ssr` - Build in SSR mode
- `pnpm test` - Run the unit tests with Vitest

### Configuration

See [Configuring quasar.config.js](https://quasar.dev/quasar-cli-vite/quasar-config-js).