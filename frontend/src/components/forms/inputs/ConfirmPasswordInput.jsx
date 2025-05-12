const ConfirmPasswordInput = ({
  register,
  error,
  name = "confirmPassword",
  label = "Powtórz hasło",
  password,
  id,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type="password"
        placeholder={label}
        className={`peer form-input ${error ? "form-error-input" : ""}`}
        {...register(name, {
          required: "Powtórz hasło",
          validate: (value) =>
            value === password || "Hasła muszą być identyczne",
        })}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {error && <p className="form-error-message">{error.message}</p>}
    </div>
  );
};

export default ConfirmPasswordInput;
