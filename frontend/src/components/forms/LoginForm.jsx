import React from "react";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "./inputs";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 gap-8 justify-around"
    >
      <h2 className="text-center text-2xl">
        Zaloguj się do panelu administratora
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

      <button type="submit" className="form-submit-button">
        Zaloguj się
      </button>
    </form>
  );
};

export default LoginForm;
