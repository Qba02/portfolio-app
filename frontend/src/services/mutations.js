import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: UserInput!) {
    registerUser(user: $registerInput) {
      id
      username
      email
      token
    }
  }
`;

const LOGIN_USER = gql`
  mutation LoginUser($loginInput: UserLoginInput!) {
    loginUser(user: $loginInput) {
      id
      username
      email
      token
    }
  }
`;

export { LOGIN_USER, REGISTER_USER };
