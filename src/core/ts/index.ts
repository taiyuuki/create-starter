import { compileTemplate } from '../../compile'
import { question } from '../../command'
import path from 'path'

async function projectScript(scope: TsScope) {
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
  compileTemplate(path.join(__dirname, '../templates/ts/base'), scope)
  switch (scope.build) {
    case 'unbuild':
      compileTemplate(path.join(__dirname, '../templates/ts/unbuild'), scope)
      break
    case 'rollup':
      compileTemplate(path.join(__dirname, '../templates/ts/rollup'), scope)
      break
    case 'tsup':
      compileTemplate(path.join(__dirname, '../templates/ts/tsup'), scope)
      break
    default:
      compileTemplate(path.join(__dirname, '../templates/ts/tsup'), scope)
  }
}

export default projectScript