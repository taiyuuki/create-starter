import { compileTemplate } from '../../../compile'
import { join } from 'path'
import { question } from '../../../command'

async function defaultProjectScript(scope: VueScope) {
  await question(scope, [{
    type: 'select',
    name: 'pwa',
    message: 'Add vite-plugin-pwa?',
    choices: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
  }])
  compileTemplate(join(__dirname, '../templates/vue/default/base'), scope)
  if (scope.features.axios) {compileTemplate(join(__dirname, '../templates/vue/default/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(join(__dirname, '../templates/vue/default/i18n'), scope)}
  if (scope.features.unocss) {compileTemplate(join(__dirname, '../templates/vue/default/unocss'), scope)}
}

export default defaultProjectScript