import gql from 'graphql-tag'

export const COMMENTS_QUERY = gql`
    query getComments ($recipeId: Int) {
        getComments (recipe: $recipeId){
            description
            dateTime
        }
    }
`
