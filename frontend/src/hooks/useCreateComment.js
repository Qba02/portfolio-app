import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "@services/mutations";
import { useCallback, useState } from "react";

export const useCreateComment = () => {
  const [success, setSuccess] = useState(false);

  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      setSuccess(true);
    },
    onError: (error) => {
      console.log(error.message);
    },
    errorPolicy: "all",
  });

  const handleCreateComment = useCallback(
    async (formData) => {
      clearStatus();
      const result = await createComment({
        variables: {
          commentInput: {
            author: formData.name,
            message: formData.comment,
          },
        },
      });
      return result.data.createComment;
    },

    [createComment]
  );

  const clearStatus = () => {
    setSuccess(false);
  };

  return {
    handleCreateComment,
    loading,
    error,
    success,
    clearStatus,
  };
};
