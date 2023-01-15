import { useAuth0 } from "@auth0/auth0-react";
import { SIGNOUT_ICON } from "../../helpers/icons";

const LogoutButton = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="flex flex-row" title="Log Out" onClick={() => logout()}>
        <div className="pr-2 pt-0.5">
          <SIGNOUT_ICON></SIGNOUT_ICON>
        </div>
        {user?.name}
      </div>
    )
  );
};

export default LogoutButton;
