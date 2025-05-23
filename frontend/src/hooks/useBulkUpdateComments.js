import { useMutation } from "@apollo/client";
import { UPDATE_COMMENTS_APPROVED_STATUS } from "@services/mutations";
import { useCallback, useState } from "react";

export const useBulkUpdateComments = () => {
  const [success, setSuccess] = useState(false);

  const [updateCommentsApprovedStatus, { loading, error, data }] = useMutation(
    UPDATE_COMMENTS_APPROVED_STATUS,
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

  const handleBulkUpdateComments = useCallback(
    async (commentsInput) => {
      clearStatus();
      await updateCommentsApprovedStatus({
        variables: {
          comments: commentsInput,
        },
      });
    },
    [updateCommentsApprovedStatus]
  );

  const clearStatus = () => {
    setSuccess(false);
  };

  return {
    handleBulkUpdateComments,
    loading,
    error,
    data,
    success,
    clearStatus,
  };
};
