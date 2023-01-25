import { compileTemplate } from '../../compile'
import path from 'path'
import { devList } from './dependencies'
import { versions } from '../../versions'

function projectScript(scope: Scope) {
  const dev = {} as Record<string, string>
  devList.forEach(dpd => {
    dev[dpd] = versions[dpd]
  })
  scope.devDependencies = JSON.stringify(dev)
  compileTemplate(path.join(__dirname, '../templates/components'), scope)
}

export default projectScript