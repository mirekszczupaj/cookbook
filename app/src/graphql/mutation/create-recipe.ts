import gql from 'graphql-tag'

export const CREATE_RECIPE_MUTATION = gql`
    mutation createRecipe ($title: String!, $image: String!, $description: String!, $userId: Int!) {
        createRecipe(createRecipeData:{
            title: $title,
            image: $image,
            description: $description,
            user: $userId
        }){
            id
            title
        }
    }
`
