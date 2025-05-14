import { Toast, Loader } from "@components/index";
import { useRegisterUser } from "@hooks/useRegisterUser";
import { useForm } from "react-hook-form";
import {
  ConfirmPasswordInput,
  EmailInput,
  NameInput,
  PasswordInput,
} from "./inputs";

const RegisterForm = () => {
  const { handleRegister, error, loading } = useRegisterUser();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    await handleRegister(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 gap-8 justify-around"
    >
      <h2 className="text-center text-2xl">
        Zarejestruj się do panelu administratora
      </h2>

      <NameInput
        register={register}
        error={errors.name}
        id="registerNameInput"
      />
      <EmailInput
        register={register}
        error={errors.email}
        id="registerEmailInput"
      />
      <PasswordInput
        register={register}
        error={errors.password}
        id="registerPasswordInput"
      />
      <ConfirmPasswordInput
        register={register}
        error={errors.confirmPassword}
        id="registerConfirmPasswordInput"
        password={password}
      />

      {error && <Toast message="Nie udało się zarejestrować" error={true} />}

      {loading ? (
        <Loader scale={0.7} />
      ) : (
        <button type="submit" className="form-submit-button">
          Zarejestruj się
        </button>
      )}
    </form>
  );
};

export default RegisterForm;
