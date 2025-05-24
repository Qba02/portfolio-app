import { useMutation } from "@apollo/client";
import { SEND_CONTACT_INFO } from "@services/mutations";
import { useCallback, useState } from "react";

export const useSendEmail = () => {
  const [success, setSuccess] = useState(false);

  const clearStatus = () => {
    setSuccess(false);
  };

  const [sendContactInfo, { loading, error }] = useMutation(SEND_CONTACT_INFO, {
    onCompleted: (isSent) => {
      if (isSent) setSuccess(true);
    },
    onError: (error) => {
      console.log(error.message);
    },
    errorPolicy: "all",
  });

  const handleSentEmail = useCallback(
    async (contactForm) => {
      clearStatus();
      return await sendContactInfo({
        variables: {
          contactInput: {
            name: contactForm.name,
            email: contactForm.email,
            message: contactForm.message,
          },
        },
      });
    },
    [sendContactInfo]
  );

  return {
    handleSentEmail,
    loading,
    error,
    success,
    clearStatus,
  };
};
