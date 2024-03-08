import gql from 'graphql-tag'

export const REMOVE_RECIPE_MUTATION = gql`
    mutation deleteRecipe ($id: Int!) {
        deleteRecipe(id: $id)
    }
`
