const TextInput = ({ register, error, name, label, id, rows }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        rows={rows}
        type="text"
        name={label}
        placeholder={label}
        className={`peer form-input custom-scroll ${
          error ? "form-error-input" : ""
        }`}
        {...register(name, {
          required: "Wymagane",
        })}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {error && <p className="form-error-message">{error.message}</p>}
    </div>
  );
};

export default TextInput;
