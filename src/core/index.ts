import ts from './ts'

async function createProject(scope: Scope) {
  let projectScript
  switch (scope.projectType) {
    case 'ts':
      projectScript = ts
      break
    default:
      projectScript = ts
      break
  }
  await projectScript(scope as TsScope)
}

export default createProject