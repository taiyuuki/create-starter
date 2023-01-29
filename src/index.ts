#!/usr/bin/env node

import path from 'path'
import { existsSync, readdirSync } from 'fs'
import { emptyDirSync } from 'fs-extra'
import { question, runCommand } from './command'
import logger from './command/logger'
import { getGitUserName, getGitUserInfo } from './utils'
import createProject from './core'
import parseArgs from './argv'
// import { version } from './dependencies/version'

async function run() {
  if (process.argv[2]) {
    parseArgs()
  }
  logger.say('Starter', 'block')
  const scope = {} as Scope
  // scope.version = version
  scope.year = new Date().getFullYear()
  scope.projectName = process.argv[2] || ''
  scope.userName = getGitUserName()
  const template = { proName: 'starter-template', dirName: scope.projectName }
  await question(scope, [
    {
      type: 'select',
      name: 'projectType',
      message: 'Check the project type:',
      initial: 0,
      choices: [
        {
          title: 'vue3', value: 'vue3', description: 'Vue 3 starter template',
        },
        {
          title: 'ts-starter', value: 'ts', description: 'TypeScript starter template',
        },
        {
          title: 'vue-components', value: 'components', description: 'Vue components library starter template',
        },
        {
          title: 'vscode-extension', value: 'vscode', description: 'VSCode extension starter template',
        },
        {
          title: 'vite-plugin', value: 'vite-plugin', description: 'Vite plugin starter template',
        },
      ],
      format: (val) => {
        if (template.dirName === '') {
          template.proName = `${val}-${template.proName}`
        }
        return val
      },
    },
    {
      type: scope.projectName === '' ? 'text' : null,
      name: 'projectName',
      message: 'Project name:',
      initial: () => template.proName,
      format: (val: string) => {
        if (val) {
          template.dirName = val.trim()
        }
        return template.dirName
      },
    },
    {
      type: 'text',
      name: 'output',
      message: 'Project folder:',
      initial: () => template.dirName,
      format: (val: string) => {
        template.dirName = val.trim()
        return path.join(process.cwd(), template.dirName || template.proName)
      },
    },
    {
      type: (_, { output }) => !existsSync(output) || readdirSync(output).length === 0 ? null : 'select',
      name: 'overwrite',
      message: () => {
        if (template.dirName === '.') {
          return 'Current directory is not empty. Remove existing files and continue?'
        }
        else {
          return `Target directory "${template.dirName}" is exist. Remove existing files and continue?`
        }
      },
      initial: 0,
      choices: [
        { title: 'No', value: false },
        { title: 'Yes', value: true },
      ],
    },
    {
      type: (_, { overwrite }) => {
        if (overwrite === false) {
          logger.error('Canceled')
        }
        else {
          return null
        }
      },
      name: 'isOverwrite',
    },
    {
      type: 'text',
      name: 'description',
      message: 'Project description:',
      initial: '',
    },
    {
      type: 'text',
      name: 'author',
      message: 'Author:',
      initial: getGitUserInfo(),
    },
  ])
  if (scope.overwrite) {
    emptyDirSync(scope.output)
  }
  await createProject(scope)
  console.log()
  await question(scope, [
    {
      type: 'select',
      name: 'packageManager',
      message: 'Install project dependencies?',
      choices: () => {
        let pkgManager
        const userAgent = process.env.npm_config_user_agent
        if (userAgent) {
          pkgManager = userAgent.split(' ')[0].split('/')[0]
        }
        if (pkgManager) {
          return [
            { title: `Yes, use ${pkgManager}`, value: pkgManager },
            { title: 'No, I will handle that myself', value: false },
          ]
        }
        else {
          return [
            { title: 'Yes, use npm', value: 'npm' },
            { title: 'Yes, use yarn', value: 'yarn' },
            { title: 'Yes, use pnpm', value: 'pnpm' },
            { title: 'No, I will handle that myself', value: false },
          ]
        }
      },
    },
  ])

  if (scope.packageManager !== false) {
    try {
      await runCommand(scope.packageManager, ['install'], { cwd: scope.output })
    }
    catch {
      logger.warn('Could not auto install dependencies. Probably a temporary npm registry issue?')
      scope.packageManager = false
      process.exit(0)
    }
    try {
      await runCommand(scope.packageManager, scope.packageManager === 'npm' ? ['run', 'lint', '--', '--fix'] : ['run', 'lint', '--fix'], { cwd: scope.output })
    }
    catch {
      logger.warn('Could not auto lint fix the project folder.')
      scope.packageManager = false
      process.exit(0)
    }
  }
  logger.say('COMPLATE', 'block')
  console.log()
  logger.info('Project has been created')
}

run()