import gql from 'graphql-tag'

export const RECIPE_QUERY = gql`
    query getRecipeById ($recipeid: Int!) {
        getRecipeById (id: $recipeid){
            id
            title
            image
            description
        }
    }
`
