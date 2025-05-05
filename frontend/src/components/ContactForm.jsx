import React from "react";

function ContactForm() {
  return (
    <form className="flex flex-col p-6 gap-8 justify-around">
      <div className="relative ">
        <input
          id="contactNameInput"
          type="text"
          name="name"
          placeholder="Imię"
          className="peer form-input"
        />
        <label htmlFor="nameInput" className="form-label">
          Imię
        </label>
      </div>

      <div className="relative">
        <input
          id="contactEmailInput"
          type="email"
          name="email"
          placeholder="Email"
          className="peer form-input"
        />
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="contactMessageInput"
          rows="5"
          type="text"
          name="message"
          placeholder="Wiadomość"
          className="peer form-input custom-scroll"
        />
        <label htmlFor="messageInput" className="form-label">
          Wiadomość
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-dark dark:bg-light text-light dark:text-dark mt-6  font-medium text-lg"
      >
        Wyślij
      </button>
    </form>
  );
}

export default ContactForm;
