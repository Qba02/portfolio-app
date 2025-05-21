import { CommentCardDraggable } from "@components";
import { useDroppable } from "@dnd-kit/core";
import { AnimatePresence } from "framer-motion";

const CommentsColumn = ({ column, comments, deleteComment }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      className="flex flex-1 flex-col rounded-lg p-4 bg-white/10 dark:bg-tertiary/10
     border-[1px] border-white/50 dark:border-tertiary"
    >
      <h2 className="mb-4  font-semibold text-dark dark:text-light text-xl pb-3">
        {column.title}
      </h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col cursor-pointer">
        <AnimatePresence>
          {comments.map((comment) => {
            return (
              <CommentCardDraggable
                key={comment.id}
                comment={comment}
                deleteComment={deleteComment}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CommentsColumn;
