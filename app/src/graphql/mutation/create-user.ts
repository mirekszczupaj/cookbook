import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation signup ($input: LoginUserInput!) {
        signup(loginUserInput: $input){
            login
            password
        }
    }
`
