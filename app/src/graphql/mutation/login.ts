import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql`
    mutation login($input: LoginUserInput!){
        login(loginUserInput: $input){
        user {
            id
            login
        }
        
        access_token
        }
    }
`
