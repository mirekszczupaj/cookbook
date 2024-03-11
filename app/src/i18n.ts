import { createI18n } from 'vue-i18n'

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
  }
})

export default i18n
