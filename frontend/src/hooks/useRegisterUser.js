import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@services/mutations";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@context/authContext";
import { pagesUrl } from "@constants/links";

export const useRegisterUser = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER, {
    onCompleted: ({ registerUser }) => {
      context.login(registerUser);
      navigate(pagesUrl.adminPanel);
    },
  });

  const handleRegister = async (formData) => {
    await registerUser({
      variables: {
        registerInput: {
          username: formData.name,
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };

  return {
    handleRegister,
    loading,
    error,
    data,
  };
};
