import { createI18n } from 'vue-i18n'
import messages from './message'

export type MessageLanguages = keyof typeof messages
export type MessageSchema = typeof messages['en-US']
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
  export interface DefineDateTimeFormat {}
  export interface DefineNumberFormat {}
}
const i18n = createI18n({
  locale: 'en-US',
  legacy: false,
  messages,
})

export default i18n