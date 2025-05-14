import { responsiveText } from "@styles/responsiveText";
import { COMMENTS_MANAGER, COMMENTS_STATUS } from "@constants/panelContent";
import { useState } from "react";
import CommentsColumn from "./CommentsColumn";

const INITIAL_COMMENTS = [
  {
    id: "1",
    author: "Research Project",
    message: "Gather requirements and create initial documentation",
    approved: false,
    createdAt: Date.now(),
  },
  {
    id: "2",
    author: "Design System",
    message: "Create component library and design tokens",
    approved: false,
    createdAt: Date.now(),
  },
  {
    id: "3",
    author: "API Integration",
    message: "Implement REST API endpoints",
    approved: true,
    createdAt: Date.now(),
  },
  {
    id: "4",
    author: "Testing",
    message: "Write unit tests for core functionality",
    approved: true,
    createdAt: Date.now(),
  },
];

const CommentsManager = () => {
  const [comment, setComment] = useState();

  return (
    <main className="m-auto w-[90%] pt-32 pb-10">
      <h2
        className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-7 text-center section-title`}
      >
        {COMMENTS_MANAGER.title}
        <span>{COMMENTS_MANAGER.tagline}</span>
      </h2>
      <div className="flex gap-6 flex-wrap">
        <CommentsColumn
          column={COMMENTS_STATUS[0]}
          comments={INITIAL_COMMENTS.filter((comment) => comment.approved)}
        ></CommentsColumn>

        <CommentsColumn
          column={COMMENTS_STATUS[1]}
          comments={INITIAL_COMMENTS.filter((comment) => !comment.approved)}
        ></CommentsColumn>

        <CommentsColumn
          column={COMMENTS_STATUS[2]}
          comments={[]}
        ></CommentsColumn>
      </div>
    </main>
  );
};

export default CommentsManager;
