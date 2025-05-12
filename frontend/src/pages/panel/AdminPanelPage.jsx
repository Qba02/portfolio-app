import { Navbar } from "@components";
import { CommentsManager, PanelMenu } from "./components";

function AdminPanelPage() {
  return (
    <>
      <div>
        <Navbar>
          <PanelMenu />
        </Navbar>
      </div>

      <div>
        <CommentsManager />
      </div>
    </>
  );
}

export default AdminPanelPage;
