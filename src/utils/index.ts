import { execSync } from 'child_process'

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