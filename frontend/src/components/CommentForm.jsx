import React from "react";

const CommentForm = () => {
  return (
    <form className="flex flex-col p-6 gap-8 justify-around">
      <div className="relative">
        <input
          id="commentNameInput"
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
        <textarea
          id="commentMessageInput"
          rows="7"
          type="text"
          name="message"
          placeholder="Komentarz"
          className="peer form-input custom-scroll"
        />
        <label htmlFor="messageInput" className="form-label">
          Komentarz
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-dark dark:bg-light text-light dark:text-dark mt-6  font-medium text-lg"
      >
        Wyślij komenentarz
      </button>
    </form>
  );
};

export default CommentForm;
