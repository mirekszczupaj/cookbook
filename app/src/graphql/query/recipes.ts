import gql from 'graphql-tag'

export const RECIPES_QUERY = gql`
    query getRecipes ($userId: Int) {
        getRecipes (user: $userId){
            id
            title
            image
            description
        }
    }
`
