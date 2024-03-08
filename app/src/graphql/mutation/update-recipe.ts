import gql from 'graphql-tag'

export const UPDATE_RECIPE_MUTATION = gql`
    mutation updateRecipe ($id: Int!, $title: String!, $image: String!, $description: String!, $userId: Int!) {
        updateRecipe(createRecipeData:{
            title: $title,
            image: $image,
            description: $description,
            user: $userId
        },
        id: $id){
            title
        }
    }
`
