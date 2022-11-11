import { compileTemplate } from '../../../compile'
import { join } from 'path'
import { question } from '../../../command'
import { arrToObj } from '../../../utils'

async function quasarProjectScript(scope: VueScope) {
  await question(scope, [
    {
      type: 'multiselect',
      name: 'mode',
      message: 'Check mode:',
      initial: 0,
      choices: [
        {
          title: 'PWA', value: 'pwa', description: 'Add PWA mode',
        },
        {
          title: 'SSR', value: 'ssr', description: 'Add SSR mode',
        },
      ],
      format(features) {
        return arrToObj(features)
      },
    },
  ])
  compileTemplate(join(__dirname, '../templates/vue/quasar/base'), scope)
  if (scope.features.axios) {compileTemplate(join(__dirname, '../templates/vue/quasar/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(join(__dirname, '../templates/vue/quasar/i18n'), scope)}
  if (scope.mode.pwa) {compileTemplate(join(__dirname, '../templates/vue/quasar/pwa'), scope)}
  if (scope.mode.ssr) {compileTemplate(join(__dirname, '../templates/vue/quasar/ssr'), scope)}
  if (scope.features.unocss) {compileTemplate(join(__dirname, '../templates/vue/quasar/unocss'), scope)}
}

export default quasarProjectScript