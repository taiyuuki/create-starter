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
        { title: 'tsup', value: 'tsup' },
        { title: 'unbuild', value: 'unbuild' },
      ],
    },
  ])
  compileTemplate(path.join(__dirname, '../templates/ts/base'), scope)
  if (scope.build === 'tsup') {
    compileTemplate(path.join(__dirname, '../templates/ts/tsup'), scope)
  }
  if (scope.build === 'unbuild') {
    compileTemplate(path.join(__dirname, '../templates/ts/unbuild'), scope)
  }
}

export default projectScript