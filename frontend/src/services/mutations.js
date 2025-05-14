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

const CREATE_COMMENT = gql`
  mutation CreateComment($commentInput: CommentInput!) {
    createComment(comment: $commentInput) {
      id
    }
  }
`;

const UPDATE_COMMENT = gql`
  mutation UpdateComment($commentUpdateInput: CommentUpdateInput!) {
    updateComment(comment: $commentUpdateInput) {
      id
    }
  }
`;

export { CREATE_COMMENT, LOGIN_USER, REGISTER_USER, UPDATE_COMMENT };
