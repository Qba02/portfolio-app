import { useQuery } from "@apollo/client";
import {
  CommentCard,
  CommentCreateForm,
  CommentUpdateForm,
  Loader,
  Modal,
} from "@components";
import { COMMENTS } from "@constants/content";
import { GET_APPROVED_COMMENTS } from "@services/queries";
import { responsiveText } from "@styles/responsiveText";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Comments = () => {
  const { data, loading, error } = useQuery(GET_APPROVED_COMMENTS);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [commentDraft, setCommentDraft] = useState(null);

  if (loading) return <Loader />;
  if (error) return <></>;

  return (
    <section id="comments" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {COMMENTS.title}
        <span>{COMMENTS.tagline}</span>
      </h2>
      <div>
        <Swiper
          modules={[Pagination]}
          pagination={{ type: "bullets", clickable: true }}
          spaceBetween={100}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1560: { slidesPerView: 3 },
          }}
          grabCursor={true}
          loop={true}
        >
          {data.approvedComments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <CommentCard comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center md:justify-end mt-10 gap-3">
          <button
            onClick={() => setIsCreateOpen(true)}
            className="primary-button"
          >
            Skomentuj
          </button>

          {commentDraft && (
            <button
              onClick={() => setIsUpdateOpen(true)}
              className="secondary-button"
            >
              Aktualizuj
            </button>
          )}
        </div>
      </div>

      <Modal
        open={isCreateOpen}
        onOpenChange={setIsCreateOpen}
        title="Dodaj komentarz"
        description="Formularz do dodawania komentarzy"
      >
        <CommentCreateForm onFormSubmit={setCommentDraft} />
      </Modal>

      <Modal
        open={isUpdateOpen}
        onOpenChange={setIsUpdateOpen}
        title="Aktualizuj ostatni komentarz"
        description="Formularz do aktualizowania komentarzy"
      >
        <CommentUpdateForm
          onFormSubmit={setCommentDraft}
          commentDraft={commentDraft}
        />
      </Modal>
    </section>
  );
};

export default Comments;
