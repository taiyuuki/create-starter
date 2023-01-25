import type { Dependence } from 'src/versions'

export const devList = [
  '@taiyuuki/eslint-config-ts',
  '@types/node',
  'eslint',
  'vitest',
] as Dependence[]

export const rollupDevList = [
  '@babel/core',
  '@rollup/plugin-babel',
  '@rollup/plugin-commonjs',
  '@rollup/plugin-node-resolve',
  'rollup',
  'rollup-plugin-copy',
  'rollup-plugin-dts',
  'rollup-plugin-node-builtins',
  'rollup-plugin-node-globals',
  'rollup-plugin-terser',
  'rollup-plugin-typescript2',
] as Dependence[]

export const tsupDevList = [
  'tsup',
] as Dependence[]

export const unbuildDevList = [
  'unbuild',
] as Dependence[]