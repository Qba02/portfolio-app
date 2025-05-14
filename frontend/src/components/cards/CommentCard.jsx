const CommentCard = ({ author, date, content }) => {
  return (
    <div className="mb-8 rounded-md bg-white/30 dark:bg-tertiary/30 px-6 py-4">
      <div
        className="flex justify-between px-3 border-b-[1px] py-3
       border-dark/50 dark:border-light/50"
      >
        <span className="font-thin">{author}</span>
        <span className="font-thin">{date}</span>
      </div>
      <div className="px-3 pb-3 pt-4 text-dark/90 dark:text-white/70 text-justify overflow-y-auto custom-scroll">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
