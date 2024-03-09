import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})
