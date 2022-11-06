declare interface Scope {
  year: number
  userName: string
  projectType: string
  projectFolder: string
  projectName: string
  description: string
  author: string
  packageManager: 'npm' | 'yarn' | 'pnpm' | false
}
declare interface TsScope extends Scope {
  build: 'tsup' | 'unbuild'
}
 
declare module 'cfonts' {
  export type Font = 'block' | 'slick' | 'tiny' | 'grid' | 'pallet' | 'shade' | 'chrome' | 'simple' | 'simpleBlock' | '3d' | 'simple3d' | 'huge' | 'console'
  export type CfontColor = string | 'system' | 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'redBright' | 'greenBright' | 'yellowBright' | 'blueBright' | 'magentaBright' | 'cyanBright' | 'whiteBright'
  export interface CfontOptions {
    font: Font
    align: string
    colors: CfontColor[]
    background: string
    letterSpacing: number
    lineHeight: number
    space: boolean
    maxLength: string
    gradient: boolean | CfontColor[]
    independentGradient: boolean | CfontColor[]
    transitionGradient: boolean
    env: 'node',
  }
  export interface Cfont {
    say: (str:string,options:CfontOptions)=>void
  }
  const cfonts: Cfont
  export default cfonts
}