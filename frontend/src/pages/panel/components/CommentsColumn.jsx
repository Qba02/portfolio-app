import { CommentCard } from "@components";

const CommentsColumn = ({ column, comments }) => {
  return (
    <div className="flex flex-1 flex-col rounded-lg p-4 bg-white/10 dark:bg-tertiary/10
     border-[1px] border-white/50 dark:border-tertiary">
      <h2 className="mb-4  font-semibold text-dark dark:text-light text-xl pb-3">
        {column.title}
      </h2>
      <div className="flex flex-1 flex-col cursor-pointer">
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.id}
              author={comment.author}
              date={comment.createdAt}
              content={comment.message}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsColumn;
