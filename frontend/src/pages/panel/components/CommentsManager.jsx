import { responsiveText } from "@styles/responsiveText";
import { COMMENTS_MANAGER } from "@constants/panelContent";

function CommentsManager() {
  return (
    <main className="m-auto w-[80%] pt-32">
      <h2
        className={`${responsiveText.sectionHeading} scale-75 text-base text-center section-title`}
      >
        {COMMENTS_MANAGER.title}
        <span>{COMMENTS_MANAGER.tagline}</span>
      </h2>
      <div className="flex col  justify-between">
        {/* <div>{COMMENTS_MANAGER.commentsApproved}</div>
        <div>{COMMENTS_MANAGER.commentsNotApproved}</div>
        <div>{COMMENTS_MANAGER.commentsToDelete}</div> */}
      </div>
    </main>
  );
}

export default CommentsManager;
