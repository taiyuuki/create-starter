import { compileTemplate } from '../../../compile'
import path from 'path'

function quasarProjectScript(scope: VueScope) {
  compileTemplate(path.join(__dirname, '../templates/vue/quasar/base'), scope)
  if (scope.features.axios) {compileTemplate(path.join(__dirname, '../templates/vue/quasar/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(path.join(__dirname, '../templates/vue/quasar/i18n'), scope)}
  if (scope.features.pwa) {compileTemplate(path.join(__dirname, '../templates/vue/quasar/pwa'), scope)}
  if (scope.features.ssr) {compileTemplate(path.join(__dirname, '../templates/vue/quasar/ssr'), scope)}
  if (scope.features.unocss) {compileTemplate(path.join(__dirname, '../templates/vue/quasar/unocss'), scope)}
}

export default quasarProjectScript