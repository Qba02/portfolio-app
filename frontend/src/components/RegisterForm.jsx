import React from "react";

const RegisterForm = () => {
  return (
    <form className="flex flex-col p-6 gap-8 justify-around">
      <h2 className="text-center text-2xl">
        Zarejestruj się do panelu administratora
      </h2>

      <div className="relative">
        <input
          id="registerNameInput"
          type="text"
          name="name"
          placeholder="Nazwa użytkownika"
          className="peer form-input"
        />
        <label htmlFor="nameInput" className="form-label">
          Nazwa użytkownika
        </label>
      </div>

      <div className="relative">
        <input
          id="registerEmailInput"
          type="email"
          name="email"
          placeholder="Email"
          className="peer form-input"
        />
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
      </div>

      <div className="relative ">
        <input
          id="registerPasswordInput"
          type="password"
          name="password"
          placeholder="Hasło"
          className="peer form-input"
        />
        <label htmlFor="passwordInput" className="form-label">
          Hasło
        </label>
      </div>

      <div className="relative ">
        <input
          id="registerPasswordInputConfirm"
          type="password"
          name="password"
          placeholder="Powtórz hasło"
          className="peer form-input"
        />
        <label htmlFor="passwordInput" className="form-label">
          Powtórz hasło
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-dark dark:bg-light text-light dark:text-dark mt-6  font-medium text-lg"
      >
        Zarejestruj się
      </button>
    </form>
  );
};

export default RegisterForm;
