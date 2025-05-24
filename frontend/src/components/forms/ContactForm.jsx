import { useForm } from "react-hook-form";
import { EmailInput, NameInput, TextInput } from "./inputs";
import { useSendEmail } from "@hooks";
import { FixedMotionToast, Loader } from "@components";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { success, error, loading, handleSentEmail } = useSendEmail();

  const onSubmit = async (data) => {
    await handleSentEmail(data);
    if (success) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 gap-8 justify-around"
    >
      <NameInput
        register={register}
        error={errors.name}
        id="contactNameInput"
        label="Imię"
      />

      <EmailInput
        register={register}
        error={errors.email}
        id="contactEmailInput"
        className="peer form-input"
      />

      <TextInput
        register={register}
        error={errors.message}
        id="contactMessageInput"
        name="message"
        label="Wiadomość"
        rows={5}
      />

      <div className="h-1 flex items-center">
        {error && (
          <FixedMotionToast
            message="Nie udało się wysłać wiadomości"
            error={true}
            className="w-full"
          />
        )}
        {success && <FixedMotionToast message="Wiadomość wysłana pomyślnie" />}
      </div>

      {loading ? (
        <Loader scale={0.7} />
      ) : (
        <button type="submit" className="form-submit-button !mt-1">
          Wyślij
        </button>
      )}
    </form>
  );
}

export default ContactForm;
