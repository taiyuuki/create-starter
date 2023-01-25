import path from 'path'
import { compileTemplate } from '../../compile'
import { setDependencies } from '../../utils'
import { devList } from './dependencies'

function projectScript(scope: Scope) {
  const dev = {} as Record<string, string>
  setDependencies(devList, dev)
  scope.devDependencies = JSON.stringify(dev)
  compileTemplate(path.join(__dirname, '../templates/vscode'), scope)
}

export default projectScript