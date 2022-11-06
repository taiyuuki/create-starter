#!/usr/bin/env node

import path from 'path'
import { existsSync, readdirSync } from 'fs'
import { question, runCommand } from './command'
import logger from './command/logger'
import { getGitUserName, getGitUserInfo } from './utils'
import createProject from './core'

async function run() {
  logger.say('Starter', 'block')
  const scope = {} as Scope
  scope.year = new Date().getFullYear()
  scope.projectName = process.argv[2] || ''
  scope.userName = getGitUserName()
  const temp = { dirName: scope.projectName }
  const defaultOptions = {
    projectName: 'ts-starter-template',
    productName: 'TS Project',
    description: 'TS Starter Template',
  }
  await question(scope, [
    {
      type: 'select',
      name: 'projectType',
      message: 'Select template:',
      initial: 0,
      choices: [
        {
          title: 'ts-starter', value: 'ts', description: 'TypeScript Starter Template',
        },
      ],
    },
    {
      type: scope.projectName === '' ? 'text' : null,
      name: 'projectName',
      message: 'Project name:',
      initial: defaultOptions.projectName,
      format: (val: string) => {
        if (val) {
          temp.dirName = val.trim()
        }
        return temp.dirName
      },
    },
    {
      type: 'text',
      name: 'projectFolder',
      message: 'Project folder:',
      initial: () => temp.dirName,
      format: (val: string) => {
        temp.dirName = val.trim()
        return path.join(process.cwd(), temp.dirName || defaultOptions.projectName)
      },
    },
    {
      type: (_, { projectFolder }) => !existsSync(projectFolder) || readdirSync(projectFolder).length === 0 ? null : 'select',
      name: 'overwrite',
      message: () => {
        if (temp.dirName === '.') {
          return 'Current directory is not empty. Remove existing files and continue?'
        }
        else {
          return `Target directory "${temp.dirName}" is exist. Remove existing files and continue?`
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
      await runCommand(scope.packageManager, ['install'], { cwd: scope.projectFolder })
    }
    catch {
      logger.warn('Could not auto install dependencies. Probably a temporary npm registry issue?')
      scope.packageManager = false
      process.exit(0)
    }
  }
  logger.say('COMPLATE', 'block')
  console.log()
  logger.info('Project has been created')
  console.log()
}

run()