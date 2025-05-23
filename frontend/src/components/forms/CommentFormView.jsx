import { FixedMotionToast } from "@components/index";
import { MdCleaningServices } from "react-icons/md";
import { NameInput, TextInput } from "./inputs";

const CommentFormView = ({
  register,
  errors,
  onReset,
  onSubmit,
  loading,
  error,
  success,
  errorMessage = "Wystąpił błąd",
  successMessage = "Sukces",
  submitButtonTitle = "Wyślij",
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col p-6 gap-8 justify-around"
    >
      <NameInput
        register={register}
        error={errors.name}
        id="commentNameInput"
        label="Imię"
      />

      <TextInput
        register={register}
        error={errors.comment}
        name="comment"
        id="commentContentInput"
        label="Komentarz"
        rows={7}
      />

      <button
        onClick={onReset}
        className="inset-0 flex justify-center items-center"
      >
        <MdCleaningServices
          title="Wyczyść formularz"
          className="dark:text-light fixed w-6 h-6
           hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in"
        />
      </button>

      <div className="h-1">
        {error && <FixedMotionToast message={errorMessage} error={true} />}
        {success && <FixedMotionToast message={successMessage} />}
      </div>
      <div className="flex">
        <button type="submit" className="form-submit-button">
          {submitButtonTitle}
        </button>
      </div>
    </form>
  );
};

export default CommentFormView;
