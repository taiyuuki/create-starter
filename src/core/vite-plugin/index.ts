import { createProject } from '@taiyuuki/create-scaffold'
import { join } from 'path'
import { versions } from '../../versions'
import { devList } from './dependencies'

function projectScript(scope: Scope) {
    const dev = {} as Record<string, string>
    dev[scope.projectName] = 'workspace:*'
    devList.forEach(dpd => {
        dev[dpd] = versions[dpd]
    })
    scope.devDependencies = JSON.stringify(dev)
    createProject(join(__dirname, '../templates/vite-plugin'), scope)
}

export default projectScript
