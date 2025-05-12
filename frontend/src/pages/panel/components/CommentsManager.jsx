import { responsiveText } from "@styles/responsiveText";
import { commentsManager } from "@constants/panelContent";

function CommentsManager() {
  return (
    <main className="m-auto w-[80%] pt-32">
      <h2
        className={`${responsiveText.sectionHeading} scale-75 text-base text-center section-title`}
      >
        {commentsManager.title}
        <span>{commentsManager.tagline}</span>
      </h2>
      <div className="flex col  justify-between">
        <div>{commentsManager.commentsApproved}</div>
        <div>{commentsManager.commentsNotApproved}</div>
        <div>{commentsManager.commentsToDelete}</div>
      </div>
    </main>
  );
}

export default CommentsManager;
