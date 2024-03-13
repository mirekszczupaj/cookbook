import { createI18n } from 'vue-i18n'
import { en } from '@/snippets/en'

const messages = {
  en
}

const i18n = createI18n({
  datetimeFormats: {
    'en-US': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  },
  messages
})

export default i18n
