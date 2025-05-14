import { useMutation } from "@apollo/client";
import { UPDATE_COMMENT } from "@services/mutations";
import { useCallback, useState } from "react";

export const useUpdateComment = () => {
  const [success, setSuccess] = useState(false);

  const [updateComment, { loading, error, data }] = useMutation(
    UPDATE_COMMENT,
    {
      onCompleted: () => {
        setSuccess(true);
      },
      onError: (error) => {
        console.log(error.message);
      },
      errorPolicy: "all",
    }
  );

  const handleUpdateComment = useCallback(
    async (CommentDraft) => {
      clearStatus();
      await updateComment({
        variables: {
          commentUpdateInput: {
            id: CommentDraft.id,
            author: CommentDraft.name,
            message: CommentDraft.comment,
          },
        },
      });
    },
    [updateComment]
  );

  const clearStatus = () => {
    setSuccess(false);
  };

  return {
    handleUpdateComment,
    loading,
    error,
    data,
    success,
    clearStatus,
  };
};
