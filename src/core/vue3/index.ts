import { arrToObj } from '../../utils'
import { question } from '../../command'
import { createProject } from '@taiyuuki/create-scaffold'
import { join } from 'path'
import quasar from './quasar-cli'
import vite from './vite'

async function vueProjectScript(scope: VueScope) {
  await question(scope, [
    {
      type: 'select',
      name: 'scaffold',
      message: 'Check scaffold:',
      initial: 0,
      choices: [
        {
          title: 'Vite', value: 'vite', description: 'Basic',
        },
        {
          title: 'Quasar-CLI', value: 'quasar', description: 'Quasar CLI based on vite',
        },
      ],
    },
    {
      type: 'multiselect',
      name: 'features',
      message: 'Check the features needed for your project:',
      initial: 0,
      choices: [
        { title: 'Axios', value: 'axios' },
        {
          title: 'UnoCSS', value: 'unocss', description: 'Atomic CSS engine',
        },
        {
          title: 'VueUse', value: 'vueuse', description: 'Vue Composition Utilities',
        },
        {
          title: 'Vue-i18n', value: 'i18n', description: 'Internationalization',
        },
        {
          title: 'Vitest', value: 'vitest', description: 'Unit Testing',
        },
      ],
      format(features) {
        return arrToObj(features)
      },
    },
    {
      type: 'multiselect',
      name: 'plugins',
      message: 'Check the vite plugins:',
      initial: 0,
      choices: [
        {
          title: 'unplugin-auto-import', value: 'autoAPIs', description: 'Auto importing Vue APIs',
        },
        {
          title: 'unplugin-vue-components', value: 'autoComponents', description: 'Auto importing Vue components',
        },
        {
          title: 'vue-markdown', value: 'markdown', description: 'Importing components via markdown',
        },
        {
          title: 'router-layouts-pages', value: 'pages', description: 'File based routing',
        },
      ],
      format(features) {
        return arrToObj(features)
      },
    },
    {
      type: (_, { features }) => features.unocss ? 'multiselect' : null,
      name: 'unoPreset',
      message: 'Check the presets of UnoCSS',
      choices: [
        {
          title: '@unocss/preset-uno', description: 'The default preset (right now it\'s equivalent to @unocss/preset-wind).', value: 'uno', selected: true,
        },
        {
          title: '@unocss/preset-attributify', description: 'Provides Attributify Mode to other presets and rules.', value: 'attributify', selected: true,
        },
        {
          title: '@unocss/preset-icons', description: 'Use any icon as a class utility.', value: 'icons', selected: true,
        },
        {
          title: '@unocss/preset-mini', description: 'The minimal but essential rules and variants.', value: 'mini',
        },
        {
          title: '@unocss/preset-wind', description: 'Tailwind / Windi CSS compact preset.', value: 'wind',
        },
        {
          title: '@unocss/preset-web-fonts', description: 'Web fonts at ease.', value: 'webFont',
        },
        {
          title: '@unocss/preset-typography', description: 'The typography preset.', value: 'typography',
        },
        {
          title: '@unocss/preset-tagify', description: 'Tagify Mode for UnoCSS.', value: 'tagify',
        },
        {
          title: '@unocss/preset-rem-to-px', description: 'Converts rem to px for utils.', value: 'remToPx',
        },
      ],
      format(feature) {
        return arrToObj(feature)
      },
    },
    {
      type: 'select',
      name: 'persist',
      message: 'Persistence of Pinia?',
      initial: 0,
      choices: [
        { title: 'Yes', value: true },
        { title: 'No', value: false },
      ],
    },
  ])
  createProject(join(__dirname, '../templates/vue/public'), scope)
  switch (scope.scaffold) {
    case 'quasar':
      await quasar(scope)
      break
    case 'vite':
      await vite(scope)
      break
    default:
      await vite(scope)
      break
  }
}

export default vueProjectScript