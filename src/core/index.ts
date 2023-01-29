import ts from './ts'
import vue3 from './vue3'
import components from './components'
import vscode from './vscode'
import vitePlugin from './vite-plugin'
import { createProject } from '@taiyuuki/create-scaffold'
import { join } from 'path'

async function projectScript(scope: Scope) {
  createProject(join(__dirname, '../templates/public'), scope)
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
    case 'vite-plugin':
      vitePlugin(scope)
      break
    default:
      await ts(scope as TsScope)
      break
  }
}

export default projectScript