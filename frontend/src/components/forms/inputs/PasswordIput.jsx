import React from "react";

const PasswordInput = ({
  register,
  error,
  name = "password",
  label = "Hasło",
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
          required: "Podaj hasło",
          minLength: {
            value: 8,
            message: "Hasło musi mieć min. 8 znaków",
          },
        })}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {error && <p className="form-error-message">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
