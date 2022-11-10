import { compileTemplate } from '../../../compile'
import { join } from 'path'

function quasarProjectScript(scope: VueScope) {
  compileTemplate(join(__dirname, '../templates/vue/quasar/default'), scope)
  if (scope.features.axios) {compileTemplate(join(__dirname, '../templates/vue/default/axios'), scope)}
  if (scope.features.i18n) {compileTemplate(join(__dirname, '../templates/vue/default/i18n'), scope)}
}

export default quasarProjectScript