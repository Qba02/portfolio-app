import { useQuery } from "@apollo/client";
import { Loader, Toast } from "@components";
import { COMMENTS_MANAGER, COMMENTS_STATUS } from "@constants/panelContent";
import { DndContext } from "@dnd-kit/core";
import { GET_ALL_COMMENTS } from "@services/queries";
import { useEffect, useState } from "react";
import CommentsColumn from "./CommentsColumn";

const CommentsManager = () => {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_COMMENTS);

  useEffect(() => {
    if (data) setComments(data.comments);
  }, [data]);

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;
    const commentId = active.id;
    const newStatus = over.id;

    setComments(() =>
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              approved: newStatus,
            }
          : comment
      )
    );
  };

  if (loading) return <Loader />;

  return (
    <main className="m-auto w-[80%] pt-32 pb-10">
      <h2
        className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-7 text-center section-title`}
      >
        {COMMENTS_MANAGER.title}
        <span>{COMMENTS_MANAGER.tagline}</span>
      </h2>
      {error && (
        <div className="h-fit my-5">
          <Toast message="Błąd ładowania komentarzy" error />
        </div>
      )}
      <div className="flex gap-8 flex-wrap">
        <DndContext onDragEnd={handleDragEnd}>
          <CommentsColumn
            key={COMMENTS_STATUS[0].id}
            column={COMMENTS_STATUS[0]}
            comments={comments.filter(
              (comment) => comment.approved === COMMENTS_STATUS[0].id
            )}
          ></CommentsColumn>

          <CommentsColumn
            key={COMMENTS_STATUS[1].id}
            column={COMMENTS_STATUS[1]}
            comments={comments.filter(
              (comment) => comment.approved === COMMENTS_STATUS[1].id
            )}
          ></CommentsColumn>
        </DndContext>
      </div>
    </main>
  );
};

export default CommentsManager;
