import path from 'path'
import { createProject } from '@taiyuuki/create-scaffold'
import { setDependencies } from '../../utils'
import { devList } from './dependencies'

function projectScript(scope: Scope) {
    const dev = {} as Record<string, string>
    setDependencies(devList, dev)
    scope.devDependencies = JSON.stringify(dev)
    createProject(path.join(__dirname, '../templates/vscode'), scope)
}

export default projectScript
