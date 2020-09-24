import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
    mutation($username:String! $password: String!){
        createUser(data:{username:$username, password:$password}){
            token
        }
    }`;

export const SIGNIN_USER = gql`
    mutation($username: String! $password: String!){
        signIn(data:{username:$username, password:$password}){
            token
        }
    }
`;

export const GET_ACTIVEUSER = gql`
    query{
        activeUser{
            id
            username
            createdAt
        }
    }   
`;

export const CREATE_POST =  gql`
    mutation(
        $title:String!
        $content:String
        $isUrl: Boolean!
        $url: String
        $isQuestion: Boolean!
        $user_id: ID!
    ){
        createPost(data:{
            title: $title
            content: $content
            isUrl: $isUrl
            url: $url
            isQuestion: $isQuestion
            user_id: $user_id
        }){
            id
        }
    }
`;

export const GET_QUESTIONS = gql`
    query{
        question{
            id
            title
            content
            createdAt
            user{
                id
                username
            }
        }
    }
`;

export const GET_NEWS = gql`
    query{
        new{
            id
            title
            url
            createdAt
            user{
                id
                username
            }
        }
    }
`;