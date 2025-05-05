import React from "react";
import { responsiveText } from "@styles/responsiveText";

const LoginForm = () => {
  return (
    <form className="flex flex-col p-6 gap-8 justify-around">
      <h2 className="text-center text-2xl">
        Zaloguj się do panelu administratora
      </h2>
      <div className="relative">
        <input
          id="loginEmailInput"
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
          id="loginPasswordInput"
          type="password"
          name="password"
          placeholder="Hasło"
          className="peer form-input"
        />
        <label htmlFor="passwordInput" className="form-label">
          Hasło
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-dark dark:bg-light text-light dark:text-dark mt-6  font-medium text-lg"
      >
        Zaloguj się
      </button>
    </form>
  );
};

export default LoginForm;
