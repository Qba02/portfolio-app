import { gql } from "@apollo/client";

const commentsAtFirstPageNumber = 6;

const GET_ALL_COMMENTS = gql`
  query Comments {
    comments {
      id
      author
      message
      createdAt
      approved
    }
  }
`;

const GET_APPROVED_COMMENTS = gql`
query ApprovedComments {
    approvedComments(limit: ${commentsAtFirstPageNumber}) {
        id
        author
        message
        createdAt
    }
}
`;

export { GET_APPROVED_COMMENTS, GET_ALL_COMMENTS };
