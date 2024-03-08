import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: import.meta.env.GRAPHQL_ENDPOINT,
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})