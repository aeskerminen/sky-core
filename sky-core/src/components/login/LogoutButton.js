import { useAuth0 } from "@auth0/auth0-react";
import { SIGNOUT_ICON } from "../../helpers/icons";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div
        className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white mr-2 p-2"
        onClick={() => logout()}
      >
        <SIGNOUT_ICON></SIGNOUT_ICON>
      </div>
    )
  );
};

export default LogoutButton;
