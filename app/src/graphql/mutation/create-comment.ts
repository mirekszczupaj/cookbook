import gql from 'graphql-tag'

export const CREATE_COMMENT_MUTATION = gql`
    mutation createComment ($description: String!, $dateTime: DateTime!, $recipeId: Int!, $userId: Int!) {
        createComment(createCommentData:{
            description: $description,
            dateTime: $dateTime,
            recipe: $recipeId,
            user: $userId
        }){
            id
            description
        }
    }
`
