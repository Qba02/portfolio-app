import React, { useState } from "react";
import { comments } from "@constants/content";
import { responsiveText } from "@styles/responsiveText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@apollo/client";
import { GET_APPROVED_COMMENTS } from "@services/queries";
import { Loader, Modal, CommentCard, CommentForm } from "@components";
import { formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";

const Comments = () => {
  const { data, loading, error } = useQuery(GET_APPROVED_COMMENTS);
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <Loader />;
  if (error) return <></>;

  return (
    <section id="comments" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {comments.title}
        <span>{comments.tagline}</span>
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
          {data.commentsByApproved.map((comment) => (
            <SwiperSlide key={comment.id}>
              <CommentCard
                author={comment.author}
                date={formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                  locale: pl,
                })}
                content={comment.message}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center md:justify-end mt-10 ">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md p-3 px-8 text-light font-medium dark:text-dark
                  bg-dark dark:bg-light transition duration-300 ease-in-out hover:scale-105"
          >
            Skomentuj
          </button>
        </div>
      </div>

      <Modal open={isOpen} onOpenChange={setIsOpen} title="Dodaj komentarz">
        <CommentForm onFormSubmit={setIsOpen}/>
      </Modal>
    </section>
  );
};

export default Comments;
