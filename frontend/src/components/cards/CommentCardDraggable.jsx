import { useDraggable } from "@dnd-kit/core";
import { formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";
import { useState } from "react";

const CommentCardDraggable = ({ comment, deleteComment }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: comment.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: 100,
        scale: 0.9,
        transition: "0.1s",
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="flex flex-col mb-8 rounded-md bg-gray-100/80 dark:bg-tertiary/80 px-6 py-4 backdrop-blur-sm"
    >
      <div
        className="flex justify-between px-3 border-b-[1px] py-3 gap-x-4 flex-wrap
       border-dark/50 dark:border-light/50"
      >
        <span className="font-thin text-left">{comment.author}</span>
        <span className="font-thin text-right">
          {formatDistanceToNow(new Date(comment.createdAt), {
            addSuffix: true,
            locale: pl,
          })}
        </span>
      </div>
      <div className="px-3 pb-3 pt-4 text-justify overflow-y-auto custom-scroll">
        <p>{comment.message}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!confirmDelete) {
            setConfirmDelete(true);
            setTimeout(() => setConfirmDelete(false), 3000);
          } else {
            deleteComment(comment.id);
          }
        }}
        onPointerDownCapture={(e) => e.stopPropagation()}
        className={`ml-auto text-sm lg:text-base cursor-pointer rounded-md font-extrabold 
            ${confirmDelete ? "bg-primary" : "bg-secondary"}
             text-light py-1 px-1 xs:px-3 lg:px-7 hover:shadow-lg hover:-translate-y-[2px] transition`}
      >
        {confirmDelete ? "Na pewno ?" : "Usuń"}
      </button>
    </div>
  );
};

export default CommentCardDraggable;
