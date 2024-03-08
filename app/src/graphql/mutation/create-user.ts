import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation createUser ($login: String!, $password: String!) {
        createUser(createUserData:{
            login: $login
            password: $password
        }){
            id
            login
            password
        }
    }
`
