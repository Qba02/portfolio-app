import { useQuery } from "@apollo/client";
import { Loader, MotionToast, Toast } from "@components";
import { COMMENTS_MANAGER, COMMENTS_STATUS } from "@constants/panelContent";
import { DndContext } from "@dnd-kit/core";
import { useDeleteComment } from "@hooks";
import { GET_ALL_COMMENTS } from "@services/queries";
import { useEffect, useState } from "react";
import CommentsColumn from "./CommentsColumn";

const CommentsManager = () => {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_COMMENTS);
  const {
    success: deleteSuccess,
    error: deleteError,
    handleDeleteComment,
  } = useDeleteComment();

  useEffect(() => {
    if (data) setComments(data.comments);
  }, [data]);

  const onCommentDelete = async (commentId) => {
    const result = await handleDeleteComment(commentId);
    if (result?.data?.deleteComment) {
      setComments((prevComments) =>
        prevComments.filter((c) => c.id !== commentId)
      );
    }
  };

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

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <main className="m-auto w-[80%] pt-32 pb-10">
      <h2
        className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center section-title`}
      >
        {COMMENTS_MANAGER.title}
        <span>{COMMENTS_MANAGER.tagline}</span>
      </h2>

      <div className="flex justify-center p-6">
        {error ? (
          <div className="h-fit my-5">
            <Toast message="Błąd podczas ładowania komentarzy" error />
          </div>
        ) : (
          <button className="primary-button">Zatwierdź zmiany</button>
        )}
      </div>

      <div className="fixed bottom-6 right-6 z-50 w-fit">
        {deleteError && (
          <MotionToast>
            <Toast message="Nie udało się usunąć komentarza" error />
          </MotionToast>
        )}
        {deleteSuccess && (
          <MotionToast>
            <Toast message="Komentarz usunięty" />
          </MotionToast>
        )}
      </div>

      <div className="flex gap-8 flex-wrap">
        <DndContext onDragEnd={handleDragEnd}>
          <CommentsColumn
            key={COMMENTS_STATUS[0].id}
            column={COMMENTS_STATUS[0]}
            comments={comments.filter(
              (comment) => comment.approved === COMMENTS_STATUS[0].id
            )}
            deleteComment={onCommentDelete}
          />

          <CommentsColumn
            key={COMMENTS_STATUS[1].id}
            column={COMMENTS_STATUS[1]}
            comments={comments.filter(
              (comment) => comment.approved === COMMENTS_STATUS[1].id
            )}
            deleteComment={onCommentDelete}
          />
        </DndContext>
      </div>
    </main>
  );
};

export default CommentsManager;
