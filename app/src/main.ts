import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './appolloClient'
import App from './App.vue'
import router from './router'

// TODO: Check
import './main.scss'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})
app.use(router)
app.mount('#app')
