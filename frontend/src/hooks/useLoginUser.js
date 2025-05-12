import { useMutation } from "@apollo/client";
import { pagesUrl } from "@constants/links";
import { AuthContext } from "@context/authContext";
import { LOGIN_USER } from "@services/mutations";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      context.login(loginUser);
      navigate(pagesUrl.adminPanel);
    },
  });

  const handleLogin = async (formData) => {
    await loginUser({
      variables: {
        loginInput: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };

  return {
    handleLogin,
    loading,
    error,
    data,
  };
};
