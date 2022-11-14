import { compileTemplate } from '../../../compile'
import { join } from 'path'
import { question } from '../../../command'

async function viteProjectScript(scope: VueScope) {
  await question(scope, [
    {
      type: 'select',
      name: 'pwa',
      message: 'Add pwa mode(vite-plugin-pwa)?',
      choices: [
        { title: 'Yes', value: true },
        { title: 'No', value: false },
      ],
    },
    // TODO: ui framework
    {
      type: 'select',
      name: 'ui',
      message: 'Choose UI framework:',
      choices: [
        {
          title: 'default', value: 'default', description: 'No any UI lib',
        },
        { title: 'Element-Plus', value: 'element' },
      ],
    },
  ])
  compileTemplate(join(__dirname, '../templates/vue/vite/base'), scope)
  if (scope.features.axios) {compileTemplate(join(__dirname, '../templates/vue/vite/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(join(__dirname, '../templates/vue/vite/i18n'), scope)}
  if (scope.features.unocss) {compileTemplate(join(__dirname, '../templates/vue/vite/unocss'), scope)}
  if (!scope.plugins.pages) {compileTemplate(join(__dirname, '../templates/vue/vite/router'), scope)}
  switch (scope.ui) {
    case 'default':
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/default'), scope)
      break
    case 'element':
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/element-plus'), scope)
      break
    default:
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/default'), scope)
      break
  }
}

export default viteProjectScript