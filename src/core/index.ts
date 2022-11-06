async function createProject(scope: Scope) {
  // TODO: import via project type
  const projectScript = (await import('./ts')).default
  await projectScript(scope as TsScope)
}

export default createProject