const NameInput = ({
  register,
  error,
  name = "name",
  label = "Nazwa użytkownika",
  id,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        placeholder={label}
        className={`peer form-input ${error ? "form-error-input" : ""}`}
        {...register(name, {
          required: "Podaj nazwę użytkownika",
          maxLength: {
            value: 40,
            message: "Maksymalna długość to 40 znaków",
          },
        })}
        // aria-invalid={errors.name ? "true" : "false"}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {error && <p className="form-error-message">{error.message}</p>}
    </div>
  );
};

export default NameInput;
