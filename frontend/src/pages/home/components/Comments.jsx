import React from "react";
import { comments } from "@constants/content";
import { responsiveText } from "@styles/responsiveText";
import { CommentCard } from "@components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@apollo/client";
import { GET_APPROVED_COMMENTS } from "@services/queries";
import { Loader } from "@components";
import { formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";

const Comments = () => {
  const { data, loading, error } = useQuery(GET_APPROVED_COMMENTS);

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
      </div>
      <button className="rounded-md p-3 m-auto text-light font-medium dark:text-dark
       bg-dark dark:bg-light transition duration-300 ease-in-out hover:scale-105">Skomentuj</button>
    </section>
  );
};

export default Comments;
