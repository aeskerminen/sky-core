import { useAuth0 } from "@auth0/auth0-react";
import { SIGNOUT_ICON } from "../../helpers/icons";

const LogoutButton = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div
        title="Log Out"
        className="flex flew-row bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 rounded-md text-white"
        onClick={() => logout()}
      >
        <div className="pr-2 pt-0.5">
          <SIGNOUT_ICON></SIGNOUT_ICON>
        </div>

        {user?.name}
      </div>
    )
  );
};

export default LogoutButton;
