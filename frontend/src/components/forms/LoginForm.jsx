import React from "react";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "./inputs";
import { useLoginUser } from "@hooks/useLoginUser";
import { ErrorToast, Loader } from "@components/index";

const LoginForm = () => {
  const { handleLogin, error, loading } = useLoginUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await handleLogin(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 gap-8 justify-around"
    >
      <h2 className="text-center text-2xl">
        Zaloguj się
      </h2>

      <EmailInput
        register={register}
        error={errors.email}
        id="loginEmailInput"
      />
      <PasswordInput
        register={register}
        error={errors.password}
        id="loginPasswordInput"
      />
      {console.log(error)}
      {error && (
        <ErrorToast
          message={
            error.message === "Bad credentials"
              ? "Błędny email lub hasło"
              : "Nie udało się zalogować"
          }
        />
      )}

      {loading ? (
        <Loader />
      ) : (
        <button type="submit" className="form-submit-button">
          Zaloguj się
        </button>
      )}
    </form>
  );
};

export default LoginForm;
