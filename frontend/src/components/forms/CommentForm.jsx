import React from "react";
import { NameInput, TextInput } from "./inputs";
import { useForm } from "react-hook-form";

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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

      <button type="submit" className="form-submit-button">
        Wyślij komenentarz
      </button>
    </form>
  );
};

export default CommentForm;
