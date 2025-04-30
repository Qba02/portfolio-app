import React from "react";
import { comments } from "@constants/content";
import { responsiveText } from "@styles/responsiveText";
import { CommentCard } from "@components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Comments = () => {
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
          <SwiperSlide>
            <CommentCard
              author="Jakub Nowak"
              date="20 minut temu"
              content="Genialna współpraca, dziękuję"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;
