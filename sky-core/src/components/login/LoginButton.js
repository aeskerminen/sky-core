import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div
        style={{ caretColor: "transparent" }}
        className="flex p-1 align-middle justify-center w-60 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md shadow-md"
      >
        <button
          className="align-middle p-2"
          onClick={() => loginWithRedirect()}
        >
          <h1 className="text-xl text-white" style={{ textAlign: "center" }}>
            Sign In
          </h1>
        </button>
      </div>
    )
  );
};

export default LoginButton;
