import { MdAdminPanelSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

const PanelMenu = () => {
  return (
    <div className="w-full flex justify-end">
      <ul className="list-none items-center gap-12">
        <li>
            <div>
               <RiLogoutCircleRLine /> 
            </div>
          <div>
            <MdAdminPanelSettings />
          </div>
          
        </li>
      </ul>
    </div>
  );
}

export default PanelMenu;
