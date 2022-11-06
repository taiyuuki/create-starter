import prompts from 'prompts'
import type { PromptObject } from 'prompts'
import logger from './logger'
import { spawn } from 'child_process'
import type { SpawnOptionsWithoutStdio } from 'child_process'

export const question = async function (scope: Scope, questions: PromptObject | PromptObject[]) {
  const result = await prompts(questions, {
    onCancel: () => {
      logger.info('Cancel')
      process.exit(1)
    },
  })
  Object.assign(scope, result)
}

export const runCommand = function (cmd: string, args: string[], options: SpawnOptionsWithoutStdio) {
  console.log()
  return new Promise((resolve, reject) => {
    const runner = spawn(
      cmd,
      args,
      Object.assign({
        cwd: process.cwd(),
        stdio: 'inherit',
        shell: true,
      }, options)
    )

    runner.on('exit', code => {
      console.log()

      if (code) {
        console.log(` ${cmd} FAILED...`)
        console.log()
        reject()
      }
      else {
        resolve(cmd)
      }
    })
  })
}