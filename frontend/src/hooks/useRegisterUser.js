import { useMutation } from "@apollo/client";
import { PAGES_URL } from "@constants/links";
import { AuthContext } from "@context/authContext";
import { REGISTER_USER } from "@services/mutations";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER, {
    onCompleted: ({ registerUser }) => {
      context.login(registerUser);
      navigate(PAGES_URL.adminPanel);
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
