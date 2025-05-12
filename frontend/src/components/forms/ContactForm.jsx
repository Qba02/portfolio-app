import { useForm } from "react-hook-form";
import { EmailInput, NameInput, TextInput } from "./inputs";

function ContactForm() {
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

      <button type="submit" className="form-submit-button">
        Wyślij
      </button>
    </form>
  );
}

export default ContactForm;
