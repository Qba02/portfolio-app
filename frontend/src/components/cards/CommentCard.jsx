import { useDraggable } from "@dnd-kit/core";
import { formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";

const CommentCard = ({ comment }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: comment.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="mb-8 rounded-md bg-white/30 dark:bg-tertiary/30 px-6 py-4"
      style={style}
    >
      <div
        className="flex justify-between px-3 border-b-[1px] py-3
       border-dark/50 dark:border-light/50"
      >
        <span className="font-thin">{comment.author}</span>
        <span className="font-thin">
          {formatDistanceToNow(new Date(comment.createdAt), {
            addSuffix: true,
            locale: pl,
          })}
        </span>
      </div>
      <div className="px-3 pb-3 pt-4 text-dark/90 dark:text-white/70 text-justify overflow-y-auto custom-scroll">
        <p>{comment.message}</p>
      </div>
    </div>
  );
};

export default CommentCard;
