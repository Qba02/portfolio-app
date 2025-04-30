import { gql } from '@apollo/client';

const GET_APPROVED_COMMENTS = gql`
query CommentsByApproved {
    commentsByApproved(approved: false) {
        id
        author
        message
        createdAt
    }
}
`;

export {GET_APPROVED_COMMENTS}