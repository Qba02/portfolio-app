const EmailInput = ({
  register,
  error,
  name = "email",
  label = "Email",
  id,
}) => (
  <div className="relative">
    <input
      id={id}
      type="email"
      placeholder={label}
      className={`peer form-input ${error ? "form-error-input" : ""}`}
      {...register(name, {
        required: "Podaj email",
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Nieprawidłowy format email",
        },
      })}
    />
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    {error && <p className="form-error-message">{error.message}</p>}
  </div>
);

export default EmailInput;
