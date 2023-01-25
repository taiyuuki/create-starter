import { compileTemplate } from '../../../compile'
import { join } from 'path'
import { question } from '../../../command'
import { setAllDependencies, getKeys } from '../../../utils'
import { base, autoComponentsEl, pwa, element } from './dependencies'
import { autoAPIs, autoComponents, axios, i18n, layouts, markdown, persist, unocss, unoPreset, vueuse } from '../dependencies'
import { versions } from '../../../versions'

async function viteProjectScript(scope: VueScope) {
  await question(scope, [
    {
      type: 'select',
      name: 'pwa',
      message: 'Add pwa mode(vite-plugin-pwa)?',
      choices: [
        { title: 'Yes', value: true },
        { title: 'No', value: false },
      ],
    },
    // TODO: ui framework
    {
      type: 'select',
      name: 'ui',
      message: 'Choose UI framework:',
      choices: [
        {
          title: 'default', value: 'default', description: 'No any UI lib',
        },
        { title: 'Element-Plus', value: 'element' },
      ],
    },
  ])

  const dev = {} as Record<string, string>
  const prod = {} as Record<string, string>

  setAllDependencies(base, dev, prod)

  if (scope.features.axios) {
    setAllDependencies(axios, dev, prod)
    compileTemplate(join(__dirname, '../templates/vue/vite/axios'), scope)
  }
  if (scope.features.i18n) {
    setAllDependencies(i18n, dev, prod)
    compileTemplate(join(__dirname, '../templates/vue/vite/i18n'), scope)
  }
  if (scope.features.unocss) {
    setAllDependencies(unocss, dev, prod)
    const presetKeys = getKeys(unoPreset)
    presetKeys.forEach(key => {
      if (scope.unoPreset[key]) {
        dev[unoPreset[key]] = versions[unoPreset[key]]
      }
    })
    compileTemplate(join(__dirname, '../templates/vue/vite/unocss'), scope)
  }
  if (scope.plugins.pages) {
    setAllDependencies(layouts, dev, prod)
  }
  else {
    compileTemplate(join(__dirname, '../templates/vue/vite/router'), scope)
  }
  if (scope.features.vueuse) {
    setAllDependencies(vueuse, dev, prod)
  }
  if (scope.plugins.markdown) {
    setAllDependencies(markdown, dev, prod)
  }
  if (scope.plugins.autoAPIs) {
    setAllDependencies(autoAPIs, dev, prod)
  }
  if (scope.plugins.autoComponents) {
    setAllDependencies(autoComponents, dev, prod)
  }
  if (scope.persist) {
    setAllDependencies(persist, dev, prod)
  }
  else {
    setAllDependencies(autoComponentsEl, dev, prod)
  }
  if (scope.pwa) {
    setAllDependencies(pwa, dev, prod)
  }

  switch (scope.ui) {
    case 'default':
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/default'), scope)
      break
    case 'element':
      setAllDependencies(element, dev, prod)
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/element-plus'), scope)
      break
    default:
      compileTemplate(join(__dirname, '../templates/vue/vite/ui/default'), scope)
      break
  }
  scope.devDependencies = JSON.stringify(dev)
  scope.dependencies = JSON.stringify(prod)
  compileTemplate(join(__dirname, '../templates/vue/vite/base'), scope)
}

export default viteProjectScript