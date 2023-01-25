import { execSync } from 'child_process'
import type { DependenceArr, DependenceZip } from 'src/versions'
import { versions } from '../versions'

export const getGitUserName = function () {
  try {
    const name = execSync('git config --get user.name') || ''
    return name.toString().trim()
  }
  catch (_) {
    return ''
  }
}

export const getGitUserInfo = function () {
  try {
    const email = execSync('git config --get user.email') || ''
    return `${getGitUserName()} <${email.toString().trim()}>`
  }
  catch (_) {
    return ''
  }
}

export const arrToObj = function (arr: string[]) {
  const result = {} as { [key: string]: boolean }
  for (const key of arr) {
    result[key] = true
  }
  return result
}

export const replaceSpace = (str: string) => {
  return str.replace(/[ \f\r\t\v]+\n/g, '\n').replace(/\n[\n]+\n/g, '\n').replace(/\[\s+\]/g, '[]').replace(/{\s+}/g, '{}')
}

export const setDependencies = (list: DependenceArr, target: Record<string, string>) => {
  list.forEach(dpd => target[dpd] = versions[dpd])
}

export const setAllDependencies = <T extends Record<string, string>>(list: DependenceZip, dev: T, prod: T) => {
  setDependencies(list.devList, dev)
  setDependencies(list.prodList, prod)
}

export const getKeys = <T extends Record<string, any>>(obj: T) => {
  return Object.keys(obj) as (keyof T)[]
}