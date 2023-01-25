import { compileTemplate } from '../../compile'
import { question } from '../../command'
import path from 'path'
import { devList, rollupDevList, tsupDevList, unbuildDevList } from './dependencies'
import { versions } from '../../versions'

async function projectScript(scope: TsScope) {
  const dev = {} as Record<string, string>
  devList.forEach(dpd => {
    dev[dpd] = versions[dpd]
  })
  await question(scope, [
    {
      type: 'select',
      name: 'build',
      message: 'Select build system:',
      initial: 0,
      choices: [
        {
          title: 'unbuild', value: 'unbuild', description: 'Based on rollup',
        },
        {
          title: 'tsup', value: 'tsup', description: 'Based on esbuild',
        },
        { title: 'rollup', value: 'rollup' },
      ],
    },
  ])
  switch (scope.build) {
    case 'unbuild':
      unbuildDevList.forEach(dpd => dev[dpd] = versions[dpd])
      compileTemplate(path.join(__dirname, '../templates/ts/unbuild'), scope)
      break
    case 'rollup':
      rollupDevList.forEach(dpd => dev[dpd] = versions[dpd])
      compileTemplate(path.join(__dirname, '../templates/ts/rollup'), scope)
      break
    case 'tsup':
      tsupDevList.forEach(dpd => dev[dpd] = versions[dpd])
      compileTemplate(path.join(__dirname, '../templates/ts/tsup'), scope)
      break
    default:
      return
  }
  scope.devDependencies = JSON.stringify(dev)
  compileTemplate(path.join(__dirname, '../templates/ts/base'), scope)
}

export default projectScript