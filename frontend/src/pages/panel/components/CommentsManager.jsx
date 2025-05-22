import { useQuery } from "@apollo/client";
import { Loader, MotionToast, Toast } from "@components";
import { COMMENTS_MANAGER, COMMENTS_STATUS } from "@constants/panelContent";
import { DndContext } from "@dnd-kit/core";
import { useDeleteComment } from "@hooks";
import { GET_ALL_COMMENTS } from "@services/queries";
import { useEffect, useMemo, useState } from "react";
import CommentsColumn from "./CommentsColumn";

const CommentsManager = () => {
  const [commentsMap, setCommentsMap] = useState(new Map());

  const { data, loading, error } = useQuery(GET_ALL_COMMENTS);
  const {
    success: deleteSuccess,
    error: deleteError,
    handleDeleteComment,
  } = useDeleteComment();

  useEffect(() => {
    if (data?.comments) {
      setCommentsMap(
        new Map(
          data.comments.map((c) => [
            c.id,
            { ...c, originalApproved: c.approved },
          ])
        )
      );
    }
  }, [data]);

  const onCommentDelete = async (commentId) => {
    const result = await handleDeleteComment(commentId);
    if (result?.data?.deleteComment) {
      setCommentsMap((prevMap) => {
        const newMap = new Map(prevMap);
        newMap.delete(commentId);
        return newMap;
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const commentId = active.id;
    const newStatus = over.id;

    setCommentsMap((prevMap) => {
      const newMap = new Map(prevMap);
      const comment = newMap.get(commentId);

      if (comment) {
        newMap.set(commentId, { ...comment, approved: newStatus });
      }
      return newMap;
    });
  };

  const approvedComments = useMemo(() => {
    return Array.from(commentsMap.values()).filter((c) => c.approved === true);
  }, [commentsMap]);

  const unapprovedComments = useMemo(() => {
    return Array.from(commentsMap.values()).filter((c) => c.approved === false);
  }, [commentsMap]);

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
            comments={approvedComments}
            deleteComment={onCommentDelete}
          />

          <CommentsColumn
            key={COMMENTS_STATUS[1].id}
            column={COMMENTS_STATUS[1]}
            comments={unapprovedComments}
            deleteComment={onCommentDelete}
          />
        </DndContext>
      </div>
    </main>
  );
};

export default CommentsManager;
