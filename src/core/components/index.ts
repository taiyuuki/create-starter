import { compileTemplate } from '../../compile'
import path from 'path'

function projectScript(scope: Scope) {
  compileTemplate(path.join(__dirname, '../templates/components'), scope)
}

export default projectScript