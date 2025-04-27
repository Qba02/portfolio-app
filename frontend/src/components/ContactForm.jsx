import React from "react";

function ContactForm() {
  return (
    <form className="flex flex-col p-6 gap-8 justify-around">
      <div className="relative ">
        <input
          id="nameInput"
          type="text"
          name="name"
          placeholder="Imię"
          className="peer contact-input"
        />
        <label htmlFor="nameInput" className="contact-label">
          Imię
        </label>
      </div>

      <div className="relative">
        <input
          id="emailInput"
          type="email"
          name="email"
          placeholder="Email"
          className="peer contact-input"
        />
        <label htmlFor="emailInput" className="contact-label">
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="messageInput"
          rows="5"
          type="text"
          name="message"
          placeholder="Wiadomość"
          className="peer contact-input"
        />
        <label htmlFor="messageInput" className="contact-label">
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
