import fs from 'fs'
import pacote from 'pacote'
import { versions } from '../src/versions'

const names = Object.keys(versions) as (keyof typeof versions)[]
async function update() {
    const result: Record<string, string> = {}
    const reg = /[a-zA-Z]/
    for await (const name of names) {
        const data = await pacote.packument(name, { registry: 'https://registry.npm.taobao.org' })
        if (data) {
            const versions = Object.keys(data.versions)
            let i = versions.length - 1
            result[name] = '^' + versions[i]
            while (reg.test(result[name])) {
                result[name] = '^' + versions[--i]
            }
        }
    }
    let code = 'export const versions = '
    code += JSON.stringify(result, null, 4) + '\n\n'
    code += 'export type Dependence = keyof typeof versions\n'
    code += 'export type DependenceArr = Dependence[]\n'
    code += 'export interface DependenceZip { devList: DependenceArr; prodList: DependenceArr }\n'
    fs.writeFileSync('./src/versions/index.ts', code.replace(/"/g,  '\''))
}

update()
