import ts from './ts'
import vue3 from './vue3'
import components from './components'
import vscode from './vscode'
import { compileTemplate } from '../compile'
import { join } from 'path'

async function createProject(scope: Scope) {
  compileTemplate(join(__dirname, '../templates/public'), scope)
  switch (scope.projectType) {
    case 'ts':
      await ts(scope as TsScope)
      break
    case 'vue3':
      await vue3(scope as VueScope)
      break
    case 'components':
      components(scope)
      break
    case 'vscode':
      vscode(scope)
      break
    default:
      await ts(scope as TsScope)
      break
  }
}

export default createProject