import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "@services/mutations";
import { useCallback, useState } from "react";

export const useDeleteComment = () => {
  const [success, setSuccess] = useState(false);

  const clearStatus = () => {
    setSuccess(false);
  };

  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT, {
    onCompleted: (isDeleted) => {
      if (isDeleted) setSuccess(true);
    },
    onError: (error) => {
      console.log(error.message);
    },
    errorPolicy: "all",
  });

  const handleDeleteComment = useCallback(
    async (id) => {
      clearStatus();
      return await deleteComment({
        variables: {
          commentId: id,
        },
      });
    },
    [deleteComment]
  );

  return {
    handleDeleteComment,
    loading,
    error,
    success,
    clearStatus,
  };
};
