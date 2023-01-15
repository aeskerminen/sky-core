import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 shadow-md rounded-md">
        <button className="" onClick={() => logout()}>
          <h1 className=" text-white p-1.5" style={{ textAlign: "center" }}>
            Sign out
          </h1>
        </button>
      </div>
    )
  );
};

export default LogoutButton;
