import { useUpdateComment } from "@hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CommentFormView from "./CommentFormView";

const CommentUpdateForm = ({ onFormSubmit, commentDraft }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const {
    handleUpdateComment,
    loading: updating,
    error: updateError,
    success: updateSuccess,
    clearStatus: clearUpdateStatus,
  } = useUpdateComment();

  const onSubmit = async (formData) => {
    clearUpdateStatus();
    const toUpdate = { ...formData, id: commentDraft.id };
    await handleUpdateComment(toUpdate);
    onFormSubmit(toUpdate);
  };

  useEffect(() => {
    if (commentDraft) {
      setValue("name", commentDraft.name);
      setValue("comment", commentDraft.comment);
    }
  }, [commentDraft, setValue]);

  return (
    <CommentFormView
      register={register}
      errors={errors}
      onReset={reset}
      onSubmit={handleSubmit(onSubmit)}
      commentDraft={commentDraft}
      loading={updating}
      error={updateError}
      success={updateSuccess}
      successMessage="Zaktualizowano komentarz"
      errorMessage="Nie udało się zaktualizować komentarza"
      submitButtonTitle="Aktualizuj"
    />
  );
};

export default CommentUpdateForm;
