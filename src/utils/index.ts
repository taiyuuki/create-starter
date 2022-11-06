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