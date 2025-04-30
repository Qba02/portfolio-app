import { gql } from "@apollo/client";

const commentsAtFirstPageNumber = 6;

const GET_APPROVED_COMMENTS = gql`
query CommentsByApproved {
    commentsByApproved(limit: ${commentsAtFirstPageNumber}) {
        id
        author
        message
        createdAt
    }
}
`;

export { GET_APPROVED_COMMENTS };
