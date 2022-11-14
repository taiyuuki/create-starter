import fglob from 'fast-glob'
import getTemplateCompiler from 'lodash/template'
import { resolve, extname } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { ensureFileSync, copySync } from 'fs-extra'
import { replaceSpace } from '../utils'

export const compileTemplate = function (templateDir: string, scope: Scope) {
  const files = fglob.sync(['**/*'], { cwd: templateDir })
  for (const rawPath of files) {
    const ext = extname(rawPath)
    const targetRelativePath = rawPath.split('/').map(name => {
      if (name.startsWith('_')) {
        name = name.slice(1)
      }
      if (name.endsWith('.ejs')) {
        name = name.slice(0, name.length - 4)
      }
      return name
    }).join('/')

    const targetPath = resolve(scope.projectFolder, targetRelativePath)
    const sourcePath = resolve(templateDir, rawPath)

    ensureFileSync(targetPath)
    if (ext === '.ejs') {
      const rawContent = readFileSync(sourcePath, 'utf-8')
      const templateCompile = getTemplateCompiler(rawContent, { 'interpolate': /<%=([\s\S]+?)%>/g })
      const newContent = targetPath.endsWith('.json') ? JSON.stringify(JSON.parse(templateCompile(scope)), null, 2) : templateCompile(scope)
      writeFileSync(targetPath, replaceSpace(newContent), 'utf-8')
    }
    else {
      copySync(sourcePath, targetPath)
    }
  }
}