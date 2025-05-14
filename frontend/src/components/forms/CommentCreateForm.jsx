import { useCreateComment } from "@hooks";
import { useForm } from "react-hook-form";
import CommentFormView from "./CommentFormView";
const CommentCreateForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    handleCreateComment,
    loading: creating,
    data: comment,
    error: createError,
    success: createSuccess,
    clearStatus: clearCreateStatus,
  } = useCreateComment();

  const onSubmit = async (formData) => {
    clearCreateStatus();
    const comment = await handleCreateComment(formData);
    onFormSubmit({ ...formData, id: comment.id });
    reset();
  };

  return (
    <CommentFormView
      register={register}
      errors={errors}
      onReset={reset}
      onSubmit={handleSubmit(onSubmit)}
      loading={creating}
      error={createError}
      success={createSuccess}
      successMessage="Dodano komentarz"
      errorMessage="Nie udało się dodać komentarza"
      submitButtonTitle="Nowy komentarz"
    />
  );
};

export default CommentCreateForm;
