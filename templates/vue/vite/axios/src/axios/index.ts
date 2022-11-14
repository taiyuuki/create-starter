import type { AxiosInstance, AxiosStatic } from 'axios'
import axios from 'axios'
import type { App } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosStatic
    $api: AxiosInstance
  }
}

const api = axios.create({ baseURL: 'https://api.example.com' })

export default {
  install(app: App) {
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$api = api
  },
}