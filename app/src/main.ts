import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient } from '@apollo/client'
import router from './router'

// TODO: Check
import './main.scss'

const app = createApp({
    setup () {
      provide(DefaultApolloClient, ApolloClient)
    },
  
    render: () => h(App)
})

app.use(router)

createApp(App).mount('#app')
