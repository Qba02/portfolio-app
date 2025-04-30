import React from "react";

const CommentCard = ({ author, date, content }) => {
  return (
    <div className="mb-6">
      <div
        className="flex justify-between px-3 border-b-[1px] py-3
       border-dark/50 dark:border-light/50"
      >
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <div className="px-3 pb-6 pt-4 max-h-60 text-justify overflow-y-auto custom-scroll">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
