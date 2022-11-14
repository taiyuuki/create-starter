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
  compileTemplate(join(__dirname, '../templates/vue/quasar-cli/base'), scope)
  if (scope.features.axios) {compileTemplate(join(__dirname, '../templates/vue/quasar-cli/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(join(__dirname, '../templates/vue/quasar-cli/i18n'), scope)}
  if (scope.mode.pwa) {compileTemplate(join(__dirname, '../templates/vue/quasar-cli/pwa'), scope)}
  if (scope.mode.ssr) {compileTemplate(join(__dirname, '../templates/vue/quasar-cli/ssr'), scope)}
  if (scope.features.unocss) {compileTemplate(join(__dirname, '../templates/vue/quasar-cli/unocss'), scope)}
}

export default quasarProjectScript