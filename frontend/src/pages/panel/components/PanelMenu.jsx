import { useLogoutUser } from "@hooks/useLogoutUser";
import { RiLogoutCircleRLine } from "react-icons/ri";

const PanelMenu = () => {
  const { handleLogout } = useLogoutUser();

  return (
    <div className="w-full flex justify-end">
      <ul className="list-none items-center gap-12">
        <li className="flex justify-center items-center">
          <button onClick={handleLogout}>
            <RiLogoutCircleRLine className="w-6 h-6 hover:scale-110 transition" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PanelMenu;
