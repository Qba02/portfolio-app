import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NameInput, TextInput } from "./inputs";
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";

const CommentForm = ({ onFormSubmit, savedComment, cleanForm }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // TODO : useCreateComment
    onFormSubmit(data);
  };

  useEffect(() => {
    if (savedComment) {
      setValue("name", savedComment.name);
      setValue("comment", savedComment.comment);
    }
  }, [savedComment, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        onClick={() => {
          cleanForm(null);
          reset();
        }}
        className="inset-0 flex justify-center items-center"
      >
        <MdCleaningServices
          title="Wyczyść formularz"
          className="dark:text-light fixed w-6 h-6
           hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in"
        />
      </button>

      <div className="flex ">
        <button type="submit" className="form-submit-button">
          {savedComment ? "Aktualizuj" : "Nowy komentarz"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
