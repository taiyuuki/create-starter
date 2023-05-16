import { createProject } from '@taiyuuki/create-scaffold'
import { join } from 'path'
import { question } from '../../../command'
import { arrToObj, setAllDependencies, getKeys } from '../../../utils'
import { versions } from '../../../versions'
import { axios, i18n, layouts, markdown, persist, unocss, unoPreset, vitest, vueuse, autoAPIs, autoComponents } from '../dependencies'
import { base,  pwa } from './dependencies'

async function quasarProjectScript(scope: VueScope) {
    await question(scope, [
        {
            type: 'multiselect',
            name: 'mode',
            message: 'Check mode:',
            initial: 0,
            choices: [
                {
                    title: 'PWA', value: 'pwa', description: 'Add PWA mode',
                },
                {
                    title: 'SSR', value: 'ssr', description: 'Add SSR mode',
                },
            ],
            format(features) {
                return arrToObj(features)
            },
        },
    ])
    const dev = {} as Record<string, string>
    const prod = {} as Record<string, string>

    setAllDependencies(base, dev, prod)

    if (scope.features.axios) {
        setAllDependencies(axios, dev, prod)
        createProject(join(__dirname, '../templates/vue/quasar-cli/axios'), scope)
    }
    if (scope.features.i18n) {
        setAllDependencies(i18n, dev, prod)
        createProject(join(__dirname, '../templates/vue/quasar-cli/i18n'), scope)
    }
    if (scope.mode.pwa) {
        setAllDependencies(pwa, dev, prod)
        createProject(join(__dirname, '../templates/vue/quasar-cli/pwa'), scope)
    }
    if (scope.mode.ssr) {createProject(join(__dirname, '../templates/vue/quasar-cli/ssr'), scope)}
    if (scope.features.unocss) {
        setAllDependencies(unocss, dev, prod)
        const presetKeys = getKeys(unoPreset)
        presetKeys.forEach(key => {
            if (scope.unoPreset[key]) {
                dev[unoPreset[key]] = versions[unoPreset[key]]
            }
        })
        createProject(join(__dirname, '../templates/vue/quasar-cli/unocss'), scope)
    }
    if (scope.features.vueuse) {
        setAllDependencies(vueuse, dev, prod)
    }
    if (scope.plugins.markdown) {
        setAllDependencies(markdown, dev, prod)
    }
    if (scope.plugins.pages) {
        setAllDependencies(layouts, dev, prod)
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
    if (scope.features.vitest) {
        setAllDependencies(vitest, dev, prod)
    }
    scope.devDependencies = JSON.stringify(dev)
    scope.dependencies = JSON.stringify(prod)
    createProject(join(__dirname, '../templates/vue/quasar-cli/base'), scope)
}

export default quasarProjectScript
