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

const DELETE_COMMENT = gql`
  mutation DeleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId)
  }
`;

const UPDATE_COMMENTS_APPROVED_STATUS = gql`
  mutation UpdateCommentsApprovedStatus(
    $comments: [CommentUpdateApprovedStatusInput]!
  ) {
    updateCommentsApprovedStatus(comments: $comments)
  }
`;

const SEND_CONTACT_INFO = gql`
  mutation SendContactInfo($contactInput: ContactInput!) {
    sendContactInfo(contactInput: $contactInput)
  }
`;

export {
  CREATE_COMMENT,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENTS_APPROVED_STATUS,
  SEND_CONTACT_INFO,
};
