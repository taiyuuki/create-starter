import cfonts from 'cfonts'
import type { Font } from 'cfonts'
import { red, yellow, white } from 'kolorist'

export const say = function (str: string, font: Font) {
  cfonts.say(str, {
    font,
    align: 'left',
    colors: ['system'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: ['#ee2c79', '#fba414', '#41b349', '#66ccff'],
    independentGradient: false,
    transitionGradient: true,
    env: 'node',
  })
}

export const info = function (str: string) {
  console.log(white(str))
}

export const warn = function (str: string) {
  console.log(yellow(str))
}

export const error = function (str: string) {
  console.log(red(str))
  process.exit(0)
}

export default {
  say, info, warn, error,
}