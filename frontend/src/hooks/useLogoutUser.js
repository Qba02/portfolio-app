import { PAGES_URL } from "@constants/links";
import { AuthContext } from "@context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useLogoutUser = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate(PAGES_URL.home);
  };

  return { handleLogout };
};
