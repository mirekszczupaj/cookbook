import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './appolloClient'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// TODO: Check
import './main.scss'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(router)
app.use(i18n)
app.mount('#app')
