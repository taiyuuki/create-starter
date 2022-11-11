declare interface Scope {
  year: number
  userName: string
  projectType: string
  projectFolder: string
  projectName: string
  description: string
  author: string
  overwrite: boolean
  packageManager: 'npm' | 'yarn' | 'pnpm' | false
}
declare interface TsScope extends Scope {
  build: 'rollup' | 'tsup' | 'unbuild'
}
declare interface VueScope extends Scope {
  ui: string
  features: {
    axios: boolean
    unocss: boolean
    vueuse: boolean
    i18n: boolean
    ref: boolean
    vitest: boolean
  }
  plugins: {
    autoAPIs: boolean
    autoComponents: boolean
    markdown: boolean
    pages: boolean
  }
  mode: {
    pwa: boolean
    ssr: boolean
  }
  unoPreset: {
    uno: boolean
    attributify: boolean
    icons: boolean
    mini: boolean
    wind: boolean
    webFont: boolean
    typography: boolean
    tagify: boolean
    remToPx: boolean
  }
}
 
declare module 'cfonts' {
  export type Font = 'block' | 'slick' | 'tiny' | 'grid' | 'pallet' | 'shade' | 'chrome' | 'simple' | 'simpleBlock' | '3d' | 'simple3d' | 'huge' | 'console'
  export type CfontColor = string
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